import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "devalue";
import { M as Markdown_editor } from "../../../../chunks/markdown-editor.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-197fxks{margin-top:20px}label.svelte-197fxks{display:block}#save-homepage-text.svelte-197fxks{margin-top:20px}button.svelte-197fxks{margin-bottom:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-pdkhkk_START -->${$$result.title = `<title>Formula Hacks | Admin - Homepage</title>`, ""}<!-- HEAD_svelte-pdkhkk_END -->`, ""}

<form method="${"POST"}" action="${"?/settings"}"><label for="${"homepageText"}" class="${"svelte-197fxks"}"><h2>Homepage Text</h2></label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      placeholder: "Modify the homepage text here (Markdown is supported).",
      name: "homepageText",
      id: "homepageText",
      rows: 25,
      value: data.homepageText
    },
    {},
    {}
  )}

	<button id="${"save-homepage-text"}" type="${"submit"}" class="${"svelte-197fxks"}">Save</button></form>

<form method="${"POST"}" action="${"?/createEvent"}"><label for="${"createNewEvent"}" class="${"svelte-197fxks"}"><h2>Create New Event</h2></label>
	<label for="${"name"}" class="${"svelte-197fxks"}">Name</label>
	<input type="${"text"}" id="${"name"}" name="${"name"}" required>

	<label for="${"description"}" class="${"svelte-197fxks"}">Description</label>
	<textarea id="${"description"}" name="${"description"}" required></textarea>

	<label for="${"start"}" class="${"svelte-197fxks"}">Start Time</label>
	<input type="${"datetime-local"}" id="${"start"}" name="${"start"}" required>

	<label for="${"end"}" class="${"svelte-197fxks"}">End Time</label>
	<input type="${"datetime-local"}" id="${"end"}" name="${"end"}" required>

	<label for="${"location"}" class="${"svelte-197fxks"}">Location</label>
	<input type="${"text"}" id="${"location"}" name="${"location"}" required>

	<label for="${"type"}" class="${"svelte-197fxks"}">Event Type</label>
	<select name="${"type"}" required><option value="${"Regular-Event"}">Regular Event</option><option value="${"Key-Event"}">Key Event</option><option value="${"Speaker-Event"}">Speaker Event</option><option value="${"Fun-Event"}">Fun Event</option><option value="${"Workshop"}">Workshop</option></select>

	<button type="${"submit"}" class="${"svelte-197fxks"}">Save</button></form>

<form method="${"POST"}" action="${"?/createFAQ"}"><label for="${"createNewFAQ"}" class="${"svelte-197fxks"}"><h2>Create New FAQ</h2></label>

	<label for="${"question"}" class="${"svelte-197fxks"}">Question</label>
	<input type="${"text"}" id="${"question"}" name="${"question"}" required>

	<label for="${"answer"}" class="${"svelte-197fxks"}">Answer</label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      id: "answer",
      name: "answer",
      required: true
    },
    {},
    {}
  )}

	<button class="${"submit svelte-197fxks"}" type="${"submit"}">Save</button></form>

<form method="${"POST"}" action="${"?/createChallenge"}"><label for="${"createNewChallenge"}" class="${"svelte-197fxks"}"><h2>Create New Challenge</h2></label>

	<label for="${"category"}" class="${"svelte-197fxks"}">Category</label>
	<input type="${"text"}" id="${"category"}" name="${"category"}" required>

	<label for="${"challenge"}" class="${"svelte-197fxks"}">Challenge</label>
	<textarea id="${"challenge"}" name="${"challenge"}" required></textarea>

	<button type="${"submit"}" class="${"svelte-197fxks"}">Save</button></form>

<form method="${"POST"}" action="${"?/deleteAll"}"><label for="${"deleteAll"}" class="${"svelte-197fxks"}"><h2>Delete All</h2></label>
	<select name="${"deleteAll"}" id="${"deleteAll"}"><option value="${""}" disabled selected>Select an element</option><option value="${"events"}">Schedule Events</option><option value="${"FAQs"}">FAQs </option><option value="${"challenges"}">Challenges </option></select>
	<button ${""} class="${"svelte-197fxks"}">Delete</button>
</form>`;
});
export {
  Page as default
};
