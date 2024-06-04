import { c as create_ssr_component } from "../../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".topographic-background.svelte-1cd2qwo{display:flex;flex-direction:column;align-items:center;background-color:#303030;background-image:url('/Topographic Background.svg');background-size:110%;min-height:calc(100vh - 159px)}.top-margin.svelte-1cd2qwo{width:75%;align-items:center;color:#f2ebd9;margin-top:4rem}@media(max-width: 768px){.topographic-background.svelte-1cd2qwo{min-height:calc(100vh - 56px)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1rz4h09_START -->${$$result.title = `<title>Formula Hacks | Verify Email</title>`, ""}<!-- HEAD_svelte-1rz4h09_END -->`, ""}

<div class="${"topographic-background svelte-1cd2qwo"}"><div class="${"top-margin svelte-1cd2qwo"}">${data.success ? `<p>Your email has been successfully verified! You can close this window now.</p>` : `<p>This verification link either never existed or expired.</p>`}</div>
</div>`;
});
export {
  Page as default
};
