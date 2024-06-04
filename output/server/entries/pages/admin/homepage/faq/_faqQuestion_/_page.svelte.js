import { c as create_ssr_component, b as escape, d as add_attribute, v as validate_component } from "../../../../../../chunks/index3.js";
import "devalue";
import { M as Markdown_editor } from "../../../../../../chunks/markdown-editor.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#header.svelte-7f8t9l{display:flex;justify-content:space-between;align-items:center}input.svelte-7f8t9l,form.svelte-7f8t9l{margin-bottom:1rem}.submit.svelte-7f8t9l{margin-top:15px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-15ta6h5_START -->${$$result.title = `<title>Formula Hacks | Admin - FAQ - ${escape(data.question.title)}</title>`, ""}<!-- HEAD_svelte-15ta6h5_END -->`, ""}

<div class="${"container"}"><div id="${"header"}" class="${"svelte-7f8t9l"}"><h1>Edit FAQ</h1>
		<form method="${"POST"}" action="${"?/delete"}" class="${"svelte-7f8t9l"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", data.question.id, 0)} class="${"svelte-7f8t9l"}">
			<button>Delete FAQ</button></form></div>

	<form method="${"POST"}" action="${"?/edit"}" class="${"svelte-7f8t9l"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", data.question.id, 0)} class="${"svelte-7f8t9l"}">

		<label for="${"title"}">Question</label>
		<input type="${"text"}" id="${"title"}" name="${"title"}" required${add_attribute("value", data.question.title, 0)} class="${"svelte-7f8t9l"}">

		<label for="${"response"}">Answer</label>
		${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      id: "response",
      name: "response",
      required: true,
      value: data.question.response
    },
    {},
    {}
  )}

		<button class="${"submit svelte-7f8t9l"}" type="${"submit"}">Save</button></form>
</div>`;
});
export {
  Page as default
};
