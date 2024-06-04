import { c as create_ssr_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1l72t3f{display:flex;flex-direction:column;gap:1rem}button.svelte-1l72t3f{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1n12h7h_START -->${$$result.title = `<title>Formula Hacks | Scan</title>`, ""}<!-- HEAD_svelte-1n12h7h_END -->`, ""}

<div class="${"main-content"}"><section class="${"svelte-1l72t3f"}">${data.scanActions.length === 0 ? `<i>No scan actions are configured. Add some in the <a href="${"/admin"}">admin panel</a>.</i>` : ``}
		${each(data.scanActions, (action) => {
    return `<a${add_attribute("href", "/scan/" + action, 0)}><button class="${"svelte-1l72t3f"}">${escape(action)}</button></a>`;
  })}</section>
</div>`;
});
export {
  Page as default
};
