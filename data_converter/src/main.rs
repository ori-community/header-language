use std::{fs, path::PathBuf};
use serde::Serialize;
use wotw_seedgen::{lexer::parser, util::UberState};

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct NamedUberState {
    id: String,
    group_id: u16,
    uber_id: u16,
    #[serde(skip_serializing_if = "Option::is_none")]
    uber_value: Option<u8>,
}

fn convert(uber_state: UberState, name: String) -> NamedUberState {
    let group_id = uber_state.identifier.uber_group;
    let uber_id = uber_state.identifier.uber_id;
    let uber_value = uber_state.value;
    let uber_value = if uber_value.is_empty() { None } else {
        Some(uber_value.parse().unwrap())
    };

    NamedUberState {
        id: name,
        group_id,
        uber_id,
        uber_value,
    }
}

fn main() {
    let named_uber_states = parser::parse_locations(&PathBuf::from("loc_data.csv"), false).unwrap()
        .into_iter().map(|location| {
            convert(location.uber_state, location.name)
        }).chain(
            parser::parse_states(&PathBuf::from("state_data.csv"), false).unwrap()
            .into_iter().map(|state| {
                convert(state.uber_state, state.name)
            })
        ).collect::<Vec<_>>();

    let json = serde_json::to_string_pretty(&named_uber_states).unwrap();
    let contents = format!("import {{ UberState }} from \"./uberStates\";\n\nconst namedUberStates: UberState[] = {};\nexport default namedUberStates;", json);
    fs::write("../src/uberState/namedUberStates.ts", contents).unwrap();
}
