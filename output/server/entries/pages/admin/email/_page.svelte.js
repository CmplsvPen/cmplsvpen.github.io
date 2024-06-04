import { c as create_ssr_component, e as each, v as validate_component, d as add_attribute, b as escape } from "../../../../chunks/index3.js";
import "devalue";
import { Status } from "@prisma/client";
import { M as Markdown_editor } from "../../../../chunks/markdown-editor.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-45dhon{margin-top:20px}label.svelte-45dhon{display:block}#save-templates.svelte-45dhon{margin-top:20px}.textbox-margin.svelte-45dhon{margin-bottom:1%;flex:1}.flex-container.svelte-45dhon{display:flex}button.svelte-45dhon{margin-bottom:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const statuses = Object.keys(Status);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-a59jnh_START -->${$$result.title = `<title>Formula Hacks | Admin - Email Templates</title>`, ""}<!-- HEAD_svelte-a59jnh_END -->`, ""}

<form method="${"POST"}" action="${"?/emailByStatus"}"><label for="${"groupEmail"}" class="${"svelte-45dhon"}"><h2>Group Email to Specific Status</h2></label>

	<div class="${"flex-container svelte-45dhon"}"><input class="${"textbox-margin svelte-45dhon"}" name="${"subject"}" placeholder="${"Type email subject here"}" required>
		<select name="${"status"}" required>${each(statuses, (status) => {
    return `<option${add_attribute("value", status, 0)}>${escape(status)}</option>`;
  })}</select></div>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      placeholder: "Type email body here",
      name: "emailBody",
      required: true
    },
    {},
    {}
  )}

	<button id="${"email-by-status"}" type="${"submit"}" class="${"svelte-45dhon"}">Send</button></form>

<form method="${"POST"}" action="${"?/settings"}"><label for="${"submitTemplate"}" class="${"svelte-45dhon"}"><h2>Submit Application Email Template</h2></label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      value: data.settings.submitTemplate,
      name: "submitTemplate"
    },
    {},
    {}
  )}

	<label for="${"acceptanceTemplate"}" class="${"svelte-45dhon"}"><h2>Acceptance Email Template</h2></label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      value: data.settings.acceptTemplate,
      name: "acceptTemplate"
    },
    {},
    {}
  )}

	<label for="${"rejectTemplate"}" class="${"svelte-45dhon"}"><h2>Rejection Email Template</h2></label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      value: data.settings.rejectTemplate,
      name: "rejectTemplate"
    },
    {},
    {}
  )}

	<label for="${"waitlistTemplate"}" class="${"svelte-45dhon"}"><h2>Waitlist Email Template</h2></label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      value: data.settings.waitlistTemplate,
      name: "waitlistTemplate",
      id: "waitlistTemplate"
    },
    {},
    {}
  )}

	<label for="${"RSVPTemplate"}" class="${"svelte-45dhon"}"><h2>Confirm Attendance Email Template</h2></label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      value: data.settings.confirmTemplate,
      name: "confirmTemplate",
      id: "confirmTemplate"
    },
    {},
    {}
  )}

	<label for="${"withdrawTemplate"}" class="${"svelte-45dhon"}"><h2>Decline Attendance Email Template</h2></label>
	${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      value: data.settings.declineTemplate,
      name: "declineTemplate",
      id: "declineTemplate"
    },
    {},
    {}
  )}

	<button id="${"save-templates"}" type="${"submit"}" class="${"svelte-45dhon"}">Save</button>
</form>`;
});
export {
  Page as default
};
