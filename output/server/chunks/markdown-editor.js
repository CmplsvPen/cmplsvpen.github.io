import { c as create_ssr_component, d as add_attribute } from "./index3.js";
import "marked";
const markdownEditor_svelte_svelte_type_style_lang = "";
const css = {
  code: ".white-preview-background.svelte-1xwsj1u{background:white}button.svelte-1xwsj1u{padding:0 1rem;background-color:#ddd;color:black}textarea.svelte-1xwsj1u{height:auto;width:100%}.border.svelte-1xwsj1u{border:2px solid gray;padding:0 1rem;min-height:3rem}.selected.svelte-1xwsj1u{text-decoration:underline}.empty-preview.svelte-1xwsj1u{color:gray;font-style:italic}.announcement-font.svelte-1xwsj1u{font-family:'Fugaz One';font-weight:400;color:#000000}",
  map: null
};
const Markdown_editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { id = name } = $$props;
  let { required = false } = $$props;
  let { placeholder = "" } = $$props;
  let { rows = 5 } = $$props;
  let { value = "" } = $$props;
  let textarea;
  let { useAnnouncementFont = false } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.useAnnouncementFont === void 0 && $$bindings.useAnnouncementFont && useAnnouncementFont !== void 0)
    $$bindings.useAnnouncementFont(useAnnouncementFont);
  $$result.css.add(css);
  return `<div><button type="${"button"}" class="${[
    "svelte-1xwsj1u",
    (useAnnouncementFont ? "announcement-font" : "") + " selected"
  ].join(" ").trim()}">Write</button>
	<button type="${"button"}" class="${[
    "svelte-1xwsj1u",
    (useAnnouncementFont ? "announcement-font" : "") + " "
  ].join(" ").trim()}">Preview</button></div>
${`<textarea${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""}${add_attribute("rows", rows, 0)} class="${["svelte-1xwsj1u", useAnnouncementFont ? "announcement-font" : ""].join(" ").trim()}"${add_attribute("this", textarea, 0)}>${value || ""}</textarea>`}`;
});
export {
  Markdown_editor as M
};
