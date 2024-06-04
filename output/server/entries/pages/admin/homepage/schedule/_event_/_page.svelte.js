import { c as create_ssr_component, b as escape, d as add_attribute } from "../../../../../../chunks/index3.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#header.svelte-1wdg76a{display:flex;justify-content:space-between;align-items:center}textarea.svelte-1wdg76a{width:100%}select.svelte-1wdg76a,input.svelte-1wdg76a,form.svelte-1wdg76a,#description.svelte-1wdg76a{margin-bottom:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1q4mbj9_START -->${$$result.title = `<title>Formula Hacks | Admin - Schedule - ${escape(data.event.name)}</title>`, ""}<!-- HEAD_svelte-1q4mbj9_END -->`, ""}

<div class="${"container"}"><div id="${"header"}" class="${"svelte-1wdg76a"}"><h1>Edit Event</h1>
		<form method="${"POST"}" action="${"?/delete"}" class="${"svelte-1wdg76a"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", data.event.id, 0)} class="${"svelte-1wdg76a"}">
			<button>Delete Event</button></form></div>

	<form method="${"POST"}" action="${"?/edit"}" class="${"svelte-1wdg76a"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", data.event.id, 0)} class="${"svelte-1wdg76a"}">

		<label for="${"name"}">Name</label>
		<input type="${"text"}" id="${"name"}" name="${"name"}" required${add_attribute("value", data.event.name, 0)} class="${"svelte-1wdg76a"}">

		<label for="${"description"}">Description</label>
		<div id="${"description"}" class="${"svelte-1wdg76a"}"><textarea id="${"description"}" name="${"description"}" required class="${"svelte-1wdg76a"}">${escape(data.event.description, true)}</textarea></div>

		<label for="${"start"}">Start Time</label>
		<input type="${"datetime-local"}" id="${"start"}" name="${"start"}" required${add_attribute("value", data.event.start.toLocaleString("sv", { timeZone: data.timezone }), 0)} class="${"svelte-1wdg76a"}">

		<label for="${"end"}">End Time</label>
		<input type="${"datetime-local"}" id="${"end"}" name="${"end"}" required${add_attribute("value", data.event.end.toLocaleString("sv", { timeZone: data.timezone }), 0)} class="${"svelte-1wdg76a"}">

		<label for="${"location"}">Location</label>
		<input type="${"text"}" id="${"location"}" name="${"location"}" required${add_attribute("value", data.event.location, 0)} class="${"svelte-1wdg76a"}">

		<label for="${"type"}">Event Type</label>
		<select name="${"type"}"${add_attribute("value", data.event.type, 0)} required class="${"svelte-1wdg76a"}"><option value="${"Regular-Event"}">Regular Event</option><option value="${"Key-Event"}">Key Event</option><option value="${"Speaker-Event"}">Speaker Event</option><option value="${"Fun-Event"}">Fun Event</option><option value="${"Workshop"}">Workshop</option></select>

		<button type="${"submit"}">Save</button></form>
</div>`;
});
export {
  Page as default
};
