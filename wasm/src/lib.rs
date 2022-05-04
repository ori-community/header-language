mod describe;

use wasm_bindgen::prelude::*;
use js_sys::JsString;

use seedgen::Header;
use seedgen::header::parser::ParseError as SeedgenParseError;
use seedgen::header::HeaderContent as SeedgenHeaderContent;

macro_rules! wrapper_type {
    ($wasm_type:ident, $seedgen_type:ident) => {
        #[wasm_bindgen]
        pub struct $wasm_type {
            inner: $seedgen_type
        }
        impl ::std::convert::From<$seedgen_type> for $wasm_type {
            fn from(inner: $seedgen_type) -> $wasm_type {
                $wasm_type { inner }
            }
        }
    };
}
macro_rules! wrapper_list {
    ($wasm_list_type:ident, $wasm_item_type:ident, $seedgen_type:ident) => {
        #[wasm_bindgen]
        pub struct $wasm_list_type {
            inner: ::std::vec::IntoIter<$seedgen_type>
        }
        impl ::std::convert::From<::std::vec::Vec<$seedgen_type>> for $wasm_list_type {
            fn from(inner: ::std::vec::Vec<$seedgen_type>) -> $wasm_list_type {
                $wasm_list_type { inner: inner.into_iter() }
            }
        }
        #[wasm_bindgen]
        impl $wasm_list_type {
            pub fn next(&mut self) -> ::std::option::Option<$wasm_item_type> {
                self.inner.next().map($wasm_item_type::from)
            }
        }
        
    };
}


#[wasm_bindgen]
pub fn check_errors(input: String) -> ParseErrorList {
    let errors = Header::parse(input, &mut rand::thread_rng())
        .err()
        .unwrap_or_else(|| vec![]);
    ParseErrorList::from(errors)
}

wrapper_list! { ParseErrorList, ParseError, SeedgenParseError }

wrapper_type! { ParseError, SeedgenParseError }
#[wasm_bindgen]
impl ParseError {
    pub fn message(&self) -> String {
        self.inner.to_string()
    }
    pub fn start_index(&self) -> usize {
        self.inner.range.start
    }
    pub fn end_index(&self) -> usize {
        self.inner.range.end
    }
    pub fn completion(&self) -> Option<String> {
        self.inner.suggestion.clone()
    }
}

#[wasm_bindgen]
pub fn parse_line(input: String) -> Option<HeaderContent> {
    let content = Header::parse(input, &mut rand::thread_rng())
        .ok()?
        .contents.pop()?
        .into();
    Some(content)
}

wrapper_type! { HeaderContent, SeedgenHeaderContent }
#[wasm_bindgen]
impl HeaderContent {
    pub fn description(&self) -> Option<Vec<JsString>> {
        let description = match &self.inner {
            SeedgenHeaderContent::OuterDocumentation(_)
            | SeedgenHeaderContent::InnerDocumentation(_)
            | SeedgenHeaderContent::Flags(_) => return None,
            SeedgenHeaderContent::Annotation(annotation) => describe::annotation(annotation),
            SeedgenHeaderContent::Command(command) => describe::command(command),
            SeedgenHeaderContent::Timer(timer) => describe::timer(timer),
            SeedgenHeaderContent::Pickup(pickup) => describe::pickup(pickup),
        };
        Some(description)
    }
}
