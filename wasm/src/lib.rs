mod describe;

use std::ops::Deref;

use wasm_bindgen::prelude::*;
use js_sys::JsString;

use wotw_seedgen::Header;
use wotw_seedgen::languages::ParseError as SeedgenParseError;
use wotw_seedgen::header::HeaderContent as SeedgenHeaderContent;

use wasm_bindgen_helper_macros::{wrapper_type, wrapper_list};

#[wasm_bindgen(js_name = "checkErrors")]
/// Parses the input string to check for errors  
/// Returns all `ParseError`s that occured, or an empty array
pub fn check_errors(input: String) -> parse_error_list::ReturnArray {
    let errors = Header::parse(input, &mut rand::thread_rng())
        .err()
        .unwrap_or_default()
        .deref()
        .to_owned()
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
    #[doc = " Contains information about an error that occured while parsing"]
    pub struct ParseError {
        inner: SeedgenParseError,
    }
}
#[wasm_bindgen]
impl ParseError {
    #[wasm_bindgen(getter)]
    /// Summary of the problem that caused this error
    pub fn message(&self) -> String {
        self.inner.to_string()
    }
    #[wasm_bindgen(getter)]
    /// `Range` that can be used to index the source file to find the source of the error
    pub fn range(&self) -> Range {
        (char_index(&self.inner.source, self.inner.range.start)..char_index(&self.inner.source, self.inner.range.end)).into()
    }
    #[wasm_bindgen(getter)]
    /// A suggestion for what kind of syntax may belong here
    pub fn completion(&self) -> Option<String> {
        self.inner.suggestion.clone()
    }
}

/// converts a Rust string index (byte) to the corresponding javascript string index (character)
fn char_index(source: &str, byte_index: usize) -> usize {
    for (char_index, (index, _)) in source.char_indices().enumerate() {
        if index == byte_index {
            return char_index;
        } else if index > byte_index {
            panic!("index {byte_index} was not on a char boundary");
        }
    }
    panic!("index {byte_index} was out of bounds");
}

wrapper_type! {
    #[wasm_bindgen]
    #[doc = " A range between two bounds, where `start` is included, but `end` is excluded"]
    pub struct Range {
        inner: core::ops::Range<usize>,
    }
}
#[wasm_bindgen]
impl Range {
    #[wasm_bindgen(getter)]
    pub fn start(&self) -> usize {
        self.inner.start
    }
    #[wasm_bindgen(getter)]
    pub fn end(&self) -> usize {
        self.inner.end
    }
}

#[wasm_bindgen(js_name = "parseLine")]
/// Parses one line of the input string  
/// Returns a `HeaderContent` if successful, or `undefined` if the line caused a parsing error
pub fn parse_line(input: String) -> Option<HeaderContent> {
    let content = Header::parse(input, &mut rand::thread_rng())
        .ok()?
        .contents.pop()?
        .into();
    Some(content)
}

wrapper_type! {
    #[wasm_bindgen]
    #[doc = " Contains information about a line of header syntax"]
    pub struct HeaderContent {
        inner: SeedgenHeaderContent,
    }
}
#[wasm_bindgen]
impl HeaderContent {
    /// Returns a description of this `HeaderContent`  
    /// On pickup lines, the first element will be a description of the location and the second element a description of the item  
    /// On other lines, the array will only contain one element
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
