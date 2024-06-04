import { c as create_ssr_component, b as escape, d as add_attribute } from "../../../../../../chunks/index3.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#header.svelte-boapuz{display:flex;justify-content:space-between;align-items:center}input.svelte-boapuz,form.svelte-boapuz{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1y7uhm7_START -->${$$result.title = `<title>Formula Hacks | Admin - Challenge - ${escape(data.challenge.title)}</title>`, ""}<!-- HEAD_svelte-1y7uhm7_END -->`, ""}

<div class="${"container"}"><div id="${"header"}" class="${"svelte-boapuz"}"><h1>Edit Challenge</h1>
		<form method="${"POST"}" action="${"?/delete"}" class="${"svelte-boapuz"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", data.challenge.id, 0)} class="${"svelte-boapuz"}">
			<button>Delete Challenge</button></form></div>

	<form method="${"POST"}" action="${"?/edit"}" class="${"svelte-boapuz"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", data.challenge.id, 0)} class="${"svelte-boapuz"}">

		<label for="${"title"}">Title</label>
		<input type="${"text"}" id="${"title"}" name="${"title"}" required${add_attribute("value", data.challenge.title, 0)} class="${"svelte-boapuz"}">

		<label for="${"response"}">Response</label>
		<textarea id="${"response"}" name="${"response"}" required>${escape(data.challenge.response, true)}</textarea>

		<button type="${"submit"}" style="${"margin-top: 1rem;"}">Save</button></form>
</div>`;
});
export {
  Page as default
};
