import { c as create_ssr_component, e as each, d as add_attribute, v as validate_component, b as escape } from "../../../../chunks/index3.js";
import "devalue";
import { T as Toggle } from "../../../../chunks/toggle.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "fieldset.svelte-qb66ka.svelte-qb66ka{display:flex;flex-direction:column;gap:1rem;margin-bottom:1rem}label.svelte-qb66ka.svelte-qb66ka{display:block;margin-bottom:0.5rem}input.svelte-qb66ka.svelte-qb66ka,textarea.svelte-qb66ka.svelte-qb66ka{flex-grow:1;width:100%}fieldset.svelte-qb66ka button.svelte-qb66ka{width:2.5rem}#addQuestion.svelte-qb66ka.svelte-qb66ka{display:flex;flex-direction:row;gap:1rem;margin-bottom:1rem}#addQuestion.svelte-qb66ka select.svelte-qb66ka{flex-grow:1}#addQuestion.svelte-qb66ka button.svelte-qb66ka{padding:0 1rem}.flex-row.svelte-qb66ka.svelte-qb66ka{display:flex;flex-flow:row wrap;justify-content:space-between;gap:1rem}.flex-row.svelte-qb66ka>div.svelte-qb66ka{flex-grow:1}.actions.svelte-qb66ka.svelte-qb66ka{justify-content:end;gap:0.5rem}button.svelte-qb66ka.svelte-qb66ka{margin-bottom:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-19yzka4_START -->${$$result.title = `<title>Formula Hacks | Admin - Registration Questions</title>`, ""}<!-- HEAD_svelte-19yzka4_END -->`, ""}

<form action="${"?/update"}" method="${"POST"}">
	${each(data.questions, (question, i) => {
    return `<fieldset class="${"svelte-qb66ka"}"><input type="${"hidden"}"${add_attribute("name", question.id + "_type", 0)}${add_attribute("value", question.type, 0)} class="${"svelte-qb66ka"}">
			
			<div class="${"flex-row svelte-qb66ka"}">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        name: question.id + "_required",
        label: "Required",
        checked: question.required
      },
      {},
      {}
    )}
				
				<div class="${"flex-row actions svelte-qb66ka"}"><button type="${"submit"}" disabled style="${"display: none"}" aria-hidden="${"true"}" class="${"svelte-qb66ka"}"></button>
					<button type="${"submit"}" name="${"id"}"${add_attribute("value", question.id, 0)} formaction="${"?/moveUp"}" ${i === 0 ? "disabled" : ""} class="${"svelte-qb66ka"}">↑</button>
					<button type="${"submit"}" name="${"id"}"${add_attribute("value", question.id, 0)} formaction="${"?/moveDown"}" ${i === data.questions.length - 1 ? "disabled" : ""} class="${"svelte-qb66ka"}">↓</button>
					<button type="${"submit"}" name="${"id"}"${add_attribute("value", question.id, 0)} formaction="${"?/delete"}" class="${"svelte-qb66ka"}">✕</button>
				</div></div>
			<div><label${add_attribute("for", question.id + "_label", 0)} class="${"svelte-qb66ka"}"><b>${escape(question.type)}</b> Label</label>
				<input${add_attribute("value", question.label, 0)}${add_attribute("name", question.id + "_label", 0)}${add_attribute("id", question.id + "_label", 0)} placeholder="${"What is your name?"}" class="${"svelte-qb66ka"}"></div>
			
			${question.type === "SENTENCE" || question.type === "PARAGRAPH" ? `<div><label${add_attribute("for", question.id + "_placeholder", 0)} class="${"svelte-qb66ka"}">Placeholder</label>
					<input${add_attribute("value", question.placeholder, 0)}${add_attribute("name", question.id + "_placeholder", 0)}${add_attribute("id", question.id + "_placeholder", 0)} placeholder="${"J. Random Hacker"}" class="${"svelte-qb66ka"}"></div>
				<div><label${add_attribute("for", question.id + "_regex", 0)} class="${"svelte-qb66ka"}">Response must match regex:</label>
					<input${add_attribute("value", question.regex, 0)}${add_attribute("name", question.id + "_regex", 0)}${add_attribute("id", question.id + "_regex", 0)} placeholder="${"Leave empty to accept all"}" class="${"svelte-qb66ka"}">
				</div>` : `${question.type === "NUMBER" ? `<div><label${add_attribute("for", question.id + "_placeholder", 0)} class="${"svelte-qb66ka"}">Placeholder</label>
					<input${add_attribute("value", question.placeholder, 0)} type="${"number"}"${add_attribute("name", question.id + "_placeholder", 0)}${add_attribute("id", question.id + "_placeholder", 0)} placeholder="${"J. Random Hacker"}" class="${"svelte-qb66ka"}"></div>
				<div class="${"flex-row svelte-qb66ka"}"><div class="${"svelte-qb66ka"}"><label${add_attribute("for", question.id + "_min", 0)} class="${"svelte-qb66ka"}">Minimum</label>
						<input${add_attribute("value", question.min, 0)} type="${"number"}"${add_attribute("name", question.id + "_min", 0)}${add_attribute("id", question.id + "_min", 0)} placeholder="${"0"}" step="${"any"}" class="${"svelte-qb66ka"}"></div>
					<div class="${"svelte-qb66ka"}"><label${add_attribute("for", question.id + "_max", 0)} class="${"svelte-qb66ka"}">Maximum</label>
						<input${add_attribute("value", question.max, 0)} type="${"number"}"${add_attribute("name", question.id + "_max", 0)}${add_attribute("id", question.id + "_max", 0)} placeholder="${"100"}" step="${"any"}" class="${"svelte-qb66ka"}"></div>
					<div class="${"svelte-qb66ka"}"><label${add_attribute("for", question.id + "_step", 0)} class="${"svelte-qb66ka"}">Step</label>
						<input${add_attribute("value", question.step, 0)} type="${"number"}"${add_attribute("name", question.id + "_step", 0)}${add_attribute("id", question.id + "_step", 0)} placeholder="${"1"}" step="${"any"}" class="${"svelte-qb66ka"}"></div>
				</div>` : `${question.type === "DROPDOWN" || question.type === "RADIO" ? `<div><label${add_attribute("for", question.id + "_options", 0)} class="${"svelte-qb66ka"}">Options</label>
					<textarea${add_attribute("name", question.id + "_options", 0)}${add_attribute("id", question.id + "_options", 0)} placeholder="${"Write one option per line, like this:\rOPTION 1\rOPTION 2\rOPTION 3"}" class="${"svelte-qb66ka"}">${escape(question.options.join("\n"), true)}</textarea></div>
				<div class="${"flex-row svelte-qb66ka"}">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        name: question.id + "_multiple",
        label: "Allow multiple selections",
        checked: Boolean(question.multiple)
      },
      {},
      {}
    )}
					${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        name: question.id + "_custom",
        label: "Allow custom response entry",
        checked: Boolean(question.custom)
      },
      {},
      {}
    )}
				</div>` : `${question.type === "FILE" ? `<div class="${"flex-row svelte-qb66ka"}"><div class="${"svelte-qb66ka"}"><label${add_attribute("for", question.id + "_accept", 0)} class="${"svelte-qb66ka"}">Accepted types:</label>
						<input${add_attribute("value", question.accept, 0)}${add_attribute("name", question.id + "_accept", 0)}${add_attribute("id", question.id + "_accept", 0)} placeholder="${".doc, .docx, .pdf"}" class="${"svelte-qb66ka"}"></div>
					<div class="${"svelte-qb66ka"}"><label${add_attribute("for", question.id + "_maxSizeMB", 0)} class="${"svelte-qb66ka"}">Max file size (MB)</label>
						<input${add_attribute("value", question.maxSizeMB, 0)} type="${"number"}"${add_attribute("name", question.id + "_maxSizeMB", 0)}${add_attribute("id", question.id + "_maxSizeMB", 0)} placeholder="${"10"}" step="${"any"}" class="${"svelte-qb66ka"}"></div>
				</div>` : ``}`}`}`}
			<div class="${"flex-row svelte-qb66ka"}">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        name: question.id + "_hideAdmission",
        label: "Hide Question From Admission",
        checked: question.hideAdmission
      },
      {},
      {}
    )}
				${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        name: question.id + "_hideScan",
        label: "Hide Question From Scan Page",
        checked: question.hideScan
      },
      {},
      {}
    )}</div>
			${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        name: question.id + "_sponsorView",
        label: "Viewable by Sponsors",
        checked: question.sponsorView
      },
      {},
      {}
    )}
		</fieldset>`;
  })}

	<form method="${"POST"}" id="${"addQuestion"}" action="${"?/create"}" class="${"svelte-qb66ka"}"><select name="${"type"}" form="${"addQuestion"}" class="${"svelte-qb66ka"}"><option value="${"SENTENCE"}">Sentence</option><option value="${"PARAGRAPH"}">Paragraph</option><option value="${"NUMBER"}">Number</option><option value="${"DROPDOWN"}">Dropdown</option><option value="${"CHECKBOX"}">Checkbox</option><option value="${"RADIO"}">Radio</option><option value="${"FILE"}">File</option></select>
		<button type="${"submit"}" class="${"svelte-qb66ka"}">Add Question</button></form>
	<button type="${"submit"}" class="${"svelte-qb66ka"}">Save</button>
</form>`;
});
export {
  Page as default
};
