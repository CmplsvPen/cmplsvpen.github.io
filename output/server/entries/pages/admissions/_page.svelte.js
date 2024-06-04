import { c as create_ssr_component, b as escape, v as validate_component, d as add_attribute } from "../../../chunks/index3.js";
import "devalue";
import { U as User_card } from "../../../chunks/user-card.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#form.svelte-1mxo5a1{position:sticky;bottom:0}#padding.svelte-1mxo5a1{height:1rem;background:linear-gradient(transparent, white)}form.svelte-1mxo5a1{flex-direction:row;justify-content:space-between;gap:1rem;background:white;padding-bottom:1rem}button.svelte-1mxo5a1{flex-grow:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-17xqupu_START -->${$$result.title = `<title>Formula Hacks | Admissions</title>`, ""}<!-- HEAD_svelte-17xqupu_END -->`, ""}
<div class="${"main-content"}">${data.user === null ? `<p>Congratulations! You&#39;ve read every application.</p>` : `<h1>${escape(data.user.authUser.email)}</h1>
		${validate_component(User_card, "UserCard").$$render(
    $$result,
    {
      user: data.user,
      questions: data.questions
    },
    {},
    {}
  )}
		<div id="${"form"}" class="${"svelte-1mxo5a1"}"><div id="${"padding"}" class="${"svelte-1mxo5a1"}"></div>
			<form method="${"POST"}" class="${"svelte-1mxo5a1"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", data.user.authUserId, 0)}>
				<button type="${"submit"}" formaction="${"?/accept"}" class="${"svelte-1mxo5a1"}">Accept</button>
				<button type="${"submit"}" formaction="${"?/reject"}" class="${"svelte-1mxo5a1"}">Reject</button>
				<button type="${"submit"}" formaction="${"?/waitlist"}" class="${"svelte-1mxo5a1"}">Waitlist</button></form></div>`}
</div>`;
});
export {
  Page as default
};
