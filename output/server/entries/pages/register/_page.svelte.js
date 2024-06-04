import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index3.js";
import "devalue";
import { S as Social_login } from "../../../chunks/social-login.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".login.svelte-3azimi{background:#f2ebd9;display:flex;flex-wrap:wrap;text-align:center;align-items:center;justify-content:space-around;width:40%;padding:0.5em 1em;margin-top:1em}.login-button.svelte-3azimi{min-width:15em;flex-grow:1}p.svelte-3azimi{margin:0;margin-bottom:0.5em;padding-top:0.5em;flex-grow:1}.topographic-background.svelte-3azimi{display:flex;flex-direction:column;align-items:center;background-color:#303030;background-image:url('/Topographic Background.svg');background-size:110%;min-height:calc(100vh - 159px)}.header.svelte-3azimi{color:#f2ebd9;margin-top:4rem;width:40%;text-align:left;font-size:180%}label.svelte-3azimi{color:#1c1c1c;padding-top:0.5em}input.svelte-3azimi{display:block;border-width:1px;margin-bottom:0.5em}button.svelte-3azimi{box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25)}.form.svelte-3azimi{width:40%;padding:0em 1em 1em 1em;background-color:#f2ebd9}.inputValues.svelte-3azimi{background-color:#f2ebd9;color:#404040}.socials.svelte-3azimi{width:40%}@media(max-width: 768px){.form.svelte-3azimi,.socials.svelte-3azimi,.header.svelte-3azimi,.login.svelte-3azimi{width:80%}.header.svelte-3azimi{font-size:4vw}input.svelte-3azimi,label.svelte-3azimi,button.svelte-3azimi{height:2em;font-size:20px}.form.svelte-3azimi{padding:0 1em 1em 1em}label.svelte-3azimi{margin-top:0.5vw}button.svelte-3azimi{margin-top:0.5vw;margin-bottom:0.5vw}.topographic-background.svelte-3azimi{min-height:calc(100vh - 56px)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-pm8eup_START -->${$$result.title = `<title>Formula Hacks | Register</title>`, ""}<!-- HEAD_svelte-pm8eup_END -->`, ""}

<div class="${"topographic-background svelte-3azimi"}"><div class="${"header svelte-3azimi"}"><h1>Register</h1></div>
	<div class="${"socials svelte-3azimi"}">${validate_component(Social_login, "SocialLogin").$$render($$result, { providers: data.providers }, {}, {})}</div>
	<div class="${"form svelte-3azimi"}"><form method="${"POST"}"><label for="${"email"}" class="${"svelte-3azimi"}">Email</label>
			<input type="${"email"}" id="${"email"}" name="${"email"}" placeholder="${"Email"}" class="${"inputValues svelte-3azimi"}" autocomplete="${"username"}">
			
			<label for="${"password"}" class="${"svelte-3azimi"}">Password (<a href="${"javascript:;"}">${`show`}</a>)
			</label>
			<input class="${"inputValues svelte-3azimi"}" placeholder="${"Password"}"${add_attribute("type", "password", 0)} id="${"password"}" name="${"password"}" required minlength="${"8"}" autocomplete="${"new-password"}">
			<button class="${"svelte-3azimi"}">Continue</button></form></div>
	<div class="${"login svelte-3azimi"}"><p class="${"svelte-3azimi"}">Already have an account?</p>
		
		<a href="${"/login"}"><button class="${"login-button svelte-3azimi"}">Login Here!</button></a></div>
</div>`;
});
export {
  Page as default
};
