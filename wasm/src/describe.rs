use js_sys::JsString;

use wotw_seedgen::header::{Annotation, HeaderCommand, TimerDefinition, VPickup};

pub fn annotation(annotation: &Annotation) -> Vec<JsString> {
    let description = match annotation {
        Annotation::Hide => "Hide this header from the public interface"
    };
    let description = format!("**Annotation**\n\n{description}");
    vec![description.into()]
}

pub fn command(command: &HeaderCommand) -> Vec<JsString> {
    let description = match command {
        HeaderCommand::Include { name } => format!("Include header {name}"),
        HeaderCommand::Exclude { name } => format!("Exclude header {name}"),
        HeaderCommand::Add { item, amount } => format!("Add this item {amount} times to the item pool:\n\n{item}"),
        HeaderCommand::Remove { item, amount } => format!("Remove this item {amount} times from the item pool:\n\n{item}"),
        HeaderCommand::Name { item, name } => format!("Set the name of this item to {name}:\n\n{item}"),
        HeaderCommand::Display { item, name } => format!("Set the display name of this item to {name}:\n\n{item}"),
        HeaderCommand::Description { item, description } => format!("Set the shop description of this item to {description}:\n\n{item}"),
        HeaderCommand::Price { item, price } => format!("Set the shop price of this item to {price}:\n\n{item}"),
        HeaderCommand::Icon { item, icon } => format!("Set the shop icon of this item to {icon}:\n\n{item}"),
        HeaderCommand::Parameter { identifier, default } => format!("Add a parameter \"${identifier}\" with default value \"${default}\""),
        HeaderCommand::Set { state } => format!("Sets the logic state \"{state}\" to be met"),
        HeaderCommand::If { parameter, value } => format!("Opens a block that will only be added to the seed if the parameter \"{parameter}\" is \"${value}\""),
        HeaderCommand::EndIf => "Closes one if block".to_string(),
    };
    let description = format!("**Command**\n\n{description}");
    vec![description.into()]
}

pub fn timer(timer: &TimerDefinition) -> Vec<JsString> {
    let description = format!("**Timer**\n\nBind a timer on {} to a toggle on {}", timer.timer, timer.toggle);
    vec![description.into()]
}

pub fn pickup(pickup: &VPickup) -> Vec<JsString> {
    let location = format!("**Location**\n\n{}", pickup.trigger);
    let item = format!("**Item**\n\n{}", pickup.item);
    vec![location.into(), item.into()]
}
