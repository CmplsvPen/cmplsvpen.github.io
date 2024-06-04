import { c as create_ssr_component, a as subscribe, d as add_attribute } from "../../../../chunks/index3.js";
import "devalue";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".topographic-background.svelte-9fg2fd{display:flex;flex-direction:column;align-items:center;background-color:#303030;background-image:url('/Topographic Background.svg');background-size:110%;min-height:calc(100vh - 159px)}.header.svelte-9fg2fd{color:#f2ebd9;margin-top:4vw;width:40%;text-align:left;font-size:2vw}.form.svelte-9fg2fd{width:40%;padding-left:0.5vw;padding-right:0.5vw;padding-top:0.5vw;padding-bottom:0.5vw;margin-bottom:10vw;background-color:#f2ebd9}.verify.svelte-9fg2fd{width:40%;padding-left:0.5vw;padding-right:0.5vw;padding-top:0.5vw;padding-bottom:0.5vw;background-color:#f2ebd9}button.svelte-9fg2fd{margin-bottom:0.5vw}label.svelte-9fg2fd{display:block;margin-bottom:0.5rem}input.svelte-9fg2fd{display:block;margin-bottom:1rem}@media(max-width: 768px){.topographic-background.svelte-9fg2fd{min-height:calc(100vh - 56px)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1n01puw_START -->${$$result.title = `<title>Formula Hacks | Reset Password</title>`, ""}<!-- HEAD_svelte-1n01puw_END -->`, ""}

<div class="${"topographic-background svelte-9fg2fd"}">${$page.url.search === "" ? `<div class="${"header svelte-9fg2fd"}"><h1>Reset Password</h1></div>
		<div class="${"form svelte-9fg2fd"}"><form method="${"POST"}" action="${"?/email"}"><label for="${"email"}" class="${"svelte-9fg2fd"}">Enter the email you used to register:</label>
				<input id="${"email"}" name="${"email"}" type="${"email"}" required autocomplete="${"username"}" class="${"svelte-9fg2fd"}">
				<button class="${"svelte-9fg2fd"}">Continue</button></form></div>` : `${$page.url.search === "?submitted" ? `<p class="${"verify svelte-9fg2fd"}">If there is an account at the address you entered, an email has been sent with a single-use
			link to reset your password. It will expire in 10 minutes. Make sure to check your spam
			folder. If you do not receive an email, it may be because you signed up with a different
			address. <br><br>
			Already changed password? <a href="${"/login"}">Login here!</a></p>` : `${$page.url.search.startsWith("?token") ? `<div class="${"form svelte-9fg2fd"}"><form method="${"POST"}" action="${"?/reset"}"><label for="${"password"}" class="${"svelte-9fg2fd"}">
					Enter a new password (<a href="${"javascript:;"}">${`show`}</a>):
				</label>
				<input${add_attribute("type", "password", 0)} id="${"password"}" name="${"password"}" required minlength="${"8"}" autocomplete="${"new-password"}" class="${"svelte-9fg2fd"}">
				<input type="${"hidden"}" name="${"token"}"${add_attribute("value", $page.url.searchParams.get("token"), 0)} class="${"svelte-9fg2fd"}">
				<button type="${"submit"}" class="${"svelte-9fg2fd"}">Reset</button></form></div>` : `${$page.url.search === "?invalid" ? `<p class="${"verify svelte-9fg2fd"}">This password reset token either never existed or expired. You can <a href="${"/login/reset-password"}">request a new one</a>.
		</p>` : ``}`}`}`}
</div>`;
});
export {
  Page as default
};
