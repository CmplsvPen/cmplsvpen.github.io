import { c as create_ssr_component } from "../../../chunks/index3.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".topographic-background.svelte-1cd2qwo{display:flex;flex-direction:column;align-items:center;background-color:#303030;background-image:url('/Topographic Background.svg');background-size:110%;min-height:calc(100vh - 159px)}.top-margin.svelte-1cd2qwo{width:75%;align-items:center;color:#f2ebd9;margin-top:4rem}@media(max-width: 768px){.topographic-background.svelte-1cd2qwo{min-height:calc(100vh - 56px)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-yvg73v_START -->${$$result.title = `<title>Formula Hacks | Unverified Email</title>`, ""}<!-- HEAD_svelte-yvg73v_END -->`, ""}

<div class="${"topographic-background svelte-1cd2qwo"}"><div class="${"top-margin svelte-1cd2qwo"}"><p>You must verify your email before accessing this page. Please check your inbox for a
			verification link. If you did not get one (remember to check spam), you can request a new one
			below.
		</p>
		<form method="${"POST"}"><button type="${"submit"}">Resend Verification Email</button></form></div>
</div>`;
});
export {
  Page as default
};
