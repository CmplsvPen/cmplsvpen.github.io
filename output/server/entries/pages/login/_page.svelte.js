import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "devalue";
import { S as Social_login } from "../../../chunks/social-login.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".register.svelte-1covzj6{background:#f2ebd9;display:flex;flex-wrap:wrap;text-align:center;align-items:center;justify-content:space-around;width:40%;padding:0.5em 1em;margin-top:1em}.register-button.svelte-1covzj6{min-width:15em;flex-grow:1}p.svelte-1covzj6{margin:0;margin-bottom:0.5em;padding-top:0.5em;flex-grow:1}.topographic-background.svelte-1covzj6{display:flex;flex-direction:column;align-items:center;background-color:#303030;background-image:url('/Topographic Background.svg');background-size:110%;min-height:calc(100vh - 159px)}.header.svelte-1covzj6{color:#f2ebd9;margin-top:4rem;width:40%;text-align:left;font-size:180%}label.svelte-1covzj6{color:#1c1c1c;padding-top:0.5em}input.svelte-1covzj6{display:block;border-width:1px;margin-bottom:0.5em}button.svelte-1covzj6{box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25)}.form.svelte-1covzj6{width:40%;padding:0em 1em 1em 1em;background-color:#f2ebd9}.inputValues.svelte-1covzj6{background-color:#f2ebd9;color:#404040}.socials.svelte-1covzj6{width:40%}@media(max-width: 768px){.form.svelte-1covzj6,.socials.svelte-1covzj6,.header.svelte-1covzj6,.register.svelte-1covzj6{width:80%}.header.svelte-1covzj6{font-size:4vw}input.svelte-1covzj6,label.svelte-1covzj6,button.svelte-1covzj6{height:2em;font-size:20px}.form.svelte-1covzj6{padding:0 1em 1em 1em}label.svelte-1covzj6{margin-top:0.5vw}button.svelte-1covzj6{margin-top:0.5vw;margin-bottom:0.5vw}.topographic-background.svelte-1covzj6{min-height:calc(100vh - 56px)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13ht5pj_START -->${$$result.title = `<title>Formula Hacks | Login</title>`, ""}<!-- HEAD_svelte-13ht5pj_END -->`, ""}

<div class="${"topographic-background svelte-1covzj6"}"><div class="${"header svelte-1covzj6"}"><h1>Login</h1></div>
	<div class="${"socials svelte-1covzj6"}">${validate_component(Social_login, "SocialLogin").$$render($$result, { providers: data.providers }, {}, {})}</div>
	<div class="${"form svelte-1covzj6"}"><form method="${"POST"}" action="${"?/login"}"><label for="${"email"}" class="${"svelte-1covzj6"}">Email</label>
			<input class="${"inputValues svelte-1covzj6"}" placeholder="${"Email"}" id="${"email"}" name="${"email"}" required autocomplete="${"username"}">
			<label for="${"password"}" class="${"svelte-1covzj6"}">Password (<a href="${"/login/reset-password"}">forgot?</a>)</label>
			
			<input class="${"inputValues svelte-1covzj6"}" type="${"password"}" placeholder="${"Password"}" id="${"password"}" name="${"password"}" autocomplete="${"current-password"}">
			<button class="${"svelte-1covzj6"}">Continue</button></form></div>
	<div class="${"register svelte-1covzj6"}"><p class="${"svelte-1covzj6"}">Don&#39;t have an account yet?</p>
		
		<a href="${"/register"}"><button class="${"register-button svelte-1covzj6"}">Register Here!</button></a></div>
</div>`;
});
export {
  Page as default
};
