#[macro_export]
macro_rules! wrapper_type {
    (
        $(#[$attribute:meta])*
        pub struct $wasm_type:ident {
            $field:ident: $wrapped_type:ty,
        }
    ) => {
        $(#[$attribute])*
        pub struct $wasm_type {
            $field: $wrapped_type,
        }
        impl From<$wrapped_type> for $wasm_type {
            fn from($field: $wrapped_type) -> $wasm_type {
                $wasm_type { $field }
            }
        }
    }
}
#[macro_export]
macro_rules! wrapper_list {
    (
        $(#[$attribute:meta])*
        pub struct $wasm_type:ident {
            $field:ident: $($($(::)?std::)?vec::)?IntoIter<$wrapped_type:ty>,
        }
        mod $mod_name:ident { typescript_type = $return_ty:literal }
    ) => {
        #[doc = " Used internally to construct arrays"]
        $(#[$attribute])*
        pub struct $wasm_type {
            $field: ::std::vec::IntoIter<$wrapped_type>
        }
        impl ::std::convert::From<::std::vec::Vec<$wrapped_type>> for $wasm_type {
            fn from($field: ::std::vec::Vec<$wrapped_type>) -> $wasm_type {
                $wasm_type { $field: $field.into_iter() }
            }
        }
        #[wasm_bindgen]
        impl $wasm_type {
            fn into_js_array(self) -> $mod_name::ReturnValue {
                $mod_name::toArray(self)
            }
            #[wasm_bindgen(skip_typescript)]
            pub fn next(&mut self) -> ::std::option::Option<$wrapped_type> {
                self.$field.next()
            }
        }
        mod $mod_name {
            use super::*;
            #[wasm_bindgen(module = "/src/toArray.js")]
            extern "C" {
                #[wasm_bindgen(typescript_type = $return_ty)]
                pub type ReturnValue;

                pub(crate) fn toArray(list: $wasm_type) -> ReturnValue;
            }
        }
    }
}
