import { c as create_ssr_component, d as add_attribute, b as escape, e as each, g as null_to_empty, v as validate_component } from "../../../chunks/index3.js";
import "devalue";
import { S as SvelteMarkdown } from "../../../chunks/SvelteMarkdown.js";
import { D as Dropdown } from "../../../chunks/dropdown.js";
const fileInput_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-d51p43{display:flex;align-items:stretch;gap:1rem;border:2px solid gray}label.svelte-d51p43{cursor:pointer}button.svelte-d51p43{width:8rem;height:100%;pointer-events:none}span.svelte-d51p43{padding:0.5rem 0}input.svelte-d51p43{display:none}.empty.svelte-d51p43{color:gray}.error.svelte-d51p43{color:red}",
  map: null
};
const File_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { id = name } = $$props;
  let { selectedFile } = $$props;
  let { accept } = $$props;
  let { maxSizeMB } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.selectedFile === void 0 && $$bindings.selectedFile && selectedFile !== void 0)
    $$bindings.selectedFile(selectedFile);
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0)
    $$bindings.accept(accept);
  if ($$props.maxSizeMB === void 0 && $$bindings.maxSizeMB && maxSizeMB !== void 0)
    $$bindings.maxSizeMB(maxSizeMB);
  $$result.css.add(css$1);
  return `<div class="${"svelte-d51p43"}"><label${add_attribute("for", id, 0)} class="${"svelte-d51p43"}"><button type="${"button"}" class="${"svelte-d51p43"}">Choose File...</button></label>
	${`<span class="${["svelte-d51p43", !selectedFile ? "empty" : ""].join(" ").trim()}">${escape(selectedFile ?? (accept ? "Allowed types are " + accept : "No file selected"))}</span>`}
	<input type="${"file"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("accept", accept, 0)} class="${"svelte-d51p43"}">
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#rsvp.svelte-1u7p2q.svelte-1u7p2q{flex-direction:row;justify-content:space-between;gap:1rem}form.svelte-1u7p2q.svelte-1u7p2q{display:flex;flex-direction:column;gap:1rem}.question.svelte-1u7p2q.svelte-1u7p2q{display:flex;flex-direction:column;gap:0.5rem}.checkbox.svelte-1u7p2q.svelte-1u7p2q{display:flex;flex-direction:row;align-items:center;justify-content:start;gap:0}input[type='checkbox'].svelte-1u7p2q.svelte-1u7p2q{order:-1}#rsvp.svelte-1u7p2q>.svelte-1u7p2q{flex-grow:1}#status.svelte-1u7p2q.svelte-1u7p2q{border:2px solid black;padding:0 1rem;text-align:center;margin-bottom:1rem}#actions-container.svelte-1u7p2q.svelte-1u7p2q{position:sticky;bottom:0;background:linear-gradient(transparent, white)}#actions.svelte-1u7p2q.svelte-1u7p2q{display:flex;flex-direction:row;justify-content:space-between;gap:0.5rem;position:sticky;padding-bottom:1rem;background:white}#actions.svelte-1u7p2q>.svelte-1u7p2q{flex:1}#status.svelte-1u7p2q button.svelte-1u7p2q{margin-bottom:1rem}.radio-buttons.svelte-1u7p2q.svelte-1u7p2q{display:flex;flex-direction:row;align-items:center}.error.svelte-1u7p2q.svelte-1u7p2q{color:red;margin:0;order:1}bold.svelte-1u7p2q.svelte-1u7p2q{font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  const application = data.user.application;
  let applicationForm;
  let saveButton;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-iwsyyg_START -->${$$result.title = `<title>Formula Hacks | Apply</title>`, ""}<!-- HEAD_svelte-iwsyyg_END -->`, ""}


<div class="${"main-content"}"><div id="${"status"}" class="${"svelte-1u7p2q"}"><p>Your application status is:</p>
		${data.user.authUser.status === "CREATED" ? `<h1>INCOMPLETE</h1>
			${data.settings.applicationDeadline !== null ? `<p>You must complete your application by
					<bold class="${"svelte-1u7p2q"}">${escape(data.settings.applicationDeadline.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }))}</bold>
					to be considered for admission.
				</p>` : `<p>You must complete your application to be considered for admission.</p>`}` : `${data.user.authUser.status === "APPLIED" ? `<h1>SUBMITTED</h1>
			<p>Thanks for applying! The team will review your application soon.</p>
			<form method="${"POST"}" action="${"?/withdraw"}" class="${"svelte-1u7p2q"}">${data.canApply ? `<button class="${"svelte-1u7p2q"}">Withdraw and Edit</button>` : `<button disabled class="${"svelte-1u7p2q"}">Cannot edit because applications are closed.</button>`}</form>` : `${data.user.authUser.status === "REJECTED" ? `<h1>REJECTED</h1>
			<p>Unfortunately, we do not have the space to offer you admission this year.</p>` : `${data.user.authUser.status === "WAITLISTED" ? `<h1>WAITLISTED</h1>
			<p>Unfortunately, we do not have the space to offer you admission at this time. We will contact
				you should this situation change.
			</p>` : `${data.user.authUser.status === "ACCEPTED" ? `<h1>${escape(data.user.authUser.status)}</h1>
			<p>Congratulations! We were impressed by your application and would like to invite you to
				attend.
			</p>

			${data.rsvpDeadline === null || /* @__PURE__ */ new Date() < data.rsvpDeadline ? `${data.rsvpDeadline ? `<p>You must confirm your attendance by ${escape(data.rsvpDeadline.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }))} to secure your spot. If you know you will not be able to attend, please decline so we
						can offer your spot to someone else.
					</p>` : ``}
				<form method="${"POST"}" id="${"rsvp"}" class="${"svelte-1u7p2q"}"><button formaction="${"?/decline"}" class="${"svelte-1u7p2q"}">Decline</button>
					<button formaction="${"?/confirm"}" class="${"svelte-1u7p2q"}">Confirm</button></form>` : `<p>Sorry, the deadline to confirm your attendance has passed. If space permits, you may sign
					up as a walk-in at the doors the day of the event, but we cannot make any guarantees.
				</p>`}` : `${data.user.authUser.status === "CONFIRMED" ? `<h1>CONFIRMED</h1>
			<p>Glad you could make it! If you change your mind, please decline so we can offer your spot to
				someone else. We look forward to seeing you at the event!
			</p>
			<form method="${"POST"}" action="${"?/decline"}" class="${"svelte-1u7p2q"}"><button class="${"svelte-1u7p2q"}">Decline</button></form>` : `${data.user.authUser.status === "DECLINED" ? `<h1>DECLINED</h1>
			<p>We&#39;re sorry to hear that you will not be able to attend. We hope to see you next year!</p>` : ``}`}`}`}`}`}`}</div>

	
	${data.user.authUser.status === "CREATED" ? `${data.canApply ? `<form enctype="${"multipart/form-data"}" method="${"POST"}" action="${"?/save"}" autocomplete="${"off"}" class="${"svelte-1u7p2q"}"${add_attribute("this", applicationForm, 0)}>${each(data.questions, (question) => {
      return `<div class="${escape(null_to_empty("question " + question.type.toLowerCase()), true) + " svelte-1u7p2q"}"><label${add_attribute("for", question.id, 0)}>${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: question.label, isInline: true }, {}, {})}
							${question.required ? `*` : ``}
							${form !== null && typeof form === "object" && question.id in form ? `<span class="${"error svelte-1u7p2q"}">${escape(form[question.id])}</span>` : ``}</label>
						${question.type === "SENTENCE" ? `<input type="${"text"}"${add_attribute("name", question.id, 0)}${add_attribute("id", question.id, 0)}${add_attribute("placeholder", question.placeholder, 0)} class="${"svelte-1u7p2q"}"${add_attribute("value", application[question.id], 0)}>` : `${question.type === "PARAGRAPH" ? `<textarea${add_attribute("name", question.id, 0)}${add_attribute("id", question.id, 0)}${add_attribute("placeholder", question.placeholder, 0)} class="${"svelte-1u7p2q"}">${application[question.id] || ""}</textarea>` : `${question.type === "NUMBER" ? `<input type="${"number"}"${add_attribute("name", question.id, 0)}${add_attribute("id", question.id, 0)}${add_attribute("step", question.step, 0)}${add_attribute("placeholder", question.placeholder, 0)} class="${"svelte-1u7p2q"}"${add_attribute("value", application[question.id], 0)}>` : `${question.type === "CHECKBOX" ? `<input type="${"checkbox"}"${add_attribute("name", question.id, 0)}${add_attribute("id", question.id, 0)} class="${"svelte-1u7p2q"}"${add_attribute("checked", application[question.id], 1)}>` : `${question.type === "DROPDOWN" ? `${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          name: question.id,
          items: question.options,
          custom: Boolean(question.custom),
          multiple: Boolean(question.multiple),
          value: application[question.id]
        },
        {
          value: ($$value) => {
            application[question.id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${question.type === "RADIO" ? `${each(question.options, (option) => {
        return `<div class="${"radio-buttons svelte-1u7p2q"}"><input type="${"radio"}"${add_attribute("name", question.id, 0)}${add_attribute("id", question.id + option, 0)}${add_attribute("value", option, 0)} class="${"svelte-1u7p2q"}"${option === application[question.id] ? add_attribute("checked", true, 1) : ""}>
									<label${add_attribute("for", question.id + option, 0)}>${escape(option)}</label>
								</div>`;
      })}` : `${question.type === "FILE" ? `${validate_component(File_input, "FileInput").$$render(
        $$result,
        {
          name: question.id,
          accept: question.accept,
          maxSizeMB: question.maxSizeMB,
          selectedFile: application[question.id]
        },
        {
          selectedFile: ($$value) => {
            application[question.id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`}`}`}`}`}`}
					</div>`;
    })}

				<div id="${"actions-container"}" class="${"svelte-1u7p2q"}"><div id="${"actions"}" class="${"svelte-1u7p2q"}"><button class="${"svelte-1u7p2q"}"${add_attribute("this", saveButton, 0)}>Save and finish later</button>
						<button formaction="${"?/finish"}" class="${"svelte-1u7p2q"}">Submit application</button></div></div></form>` : `<p>Sorry, applications have closed. If space permits, you may sign up as a walk-in at the doors
				the day of the event, but we cannot make any guarantees.
			</p>`}` : ``}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
