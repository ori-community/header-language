mod describe;
mod helpers;

use wasm_bindgen::prelude::*;
use js_sys::JsString;

use seedgen::Header;
use seedgen::header::parser::ParseError as SeedgenParseError;
use seedgen::header::HeaderContent as SeedgenHeaderContent;

#[wasm_bindgen(js_name = "checkErrors")]
pub fn check_errors(input: String) -> parse_error_list::ReturnValue {
    let errors = Header::parse(input, &mut rand::thread_rng())
        .err()
        .unwrap_or_else(|| vec![])
        .into_iter()
        .map(ParseError::from)
        .collect::<Vec<_>>();
    ParseErrorList::from(errors).into_js_array()
}

wrapper_list! {
    #[wasm_bindgen]
    pub struct ParseErrorList {
        inner: IntoIter<ParseError>,
    }
    mod parse_error_list { typescript_type = "ParseError[]" }
}

wrapper_type! {
    #[wasm_bindgen]
    pub struct ParseError {
        inner: SeedgenParseError,
    }
}
#[wasm_bindgen]
impl ParseError {
    pub fn message(&self) -> String {
        self.inner.to_string()
    }
    #[wasm_bindgen(js_name = "startIndex")]
    pub fn start_index(&self) -> usize {
        self.inner.range.start
    }
    #[wasm_bindgen(js_name = "endIndex")]
    pub fn end_index(&self) -> usize {
        self.inner.range.end
    }
    pub fn completion(&self) -> Option<String> {
        self.inner.suggestion.clone()
    }
}

#[wasm_bindgen(js_name = "parseLine")]
pub fn parse_line(input: String) -> Option<HeaderContent> {
    let content = Header::parse(input, &mut rand::thread_rng())
        .ok()?
        .contents.pop()?
        .into();
    Some(content)
}

wrapper_type! {
    #[wasm_bindgen]
    pub struct HeaderContent {
        inner: SeedgenHeaderContent,
    }
}
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