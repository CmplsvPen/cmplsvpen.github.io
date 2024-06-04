import { c as create_ssr_component, d as add_attribute, b as escape } from "./index3.js";
const toggle_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1eorpcm{display:flex;align-items:center}.toggle.svelte-1eorpcm{appearance:none;width:62px;height:32px;display:inline-block;position:relative;border-radius:50px;overflow:hidden;outline:none;border:none;cursor:pointer;background-color:#707070;transition:background-color ease 0.3s;margin:0}.toggle.svelte-1eorpcm:before{content:'';display:block;position:absolute;z-index:2;width:28px;height:28px;background:#fff;left:2px;top:2px;border-radius:50%;color:#fff;box-shadow:0 1px 2px rgba(0, 0, 0, 0.2);transition:all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s}.toggle.svelte-1eorpcm:checked{background-color:#4cd964}.toggle.svelte-1eorpcm:checked:before{left:32px}label.svelte-1eorpcm{margin:0 0 0 0.5rem}input.svelte-1eorpcm{padding:0}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label } = $$props;
  let { checked } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css);
  return `<div class="${"svelte-1eorpcm"}"><input type="${"checkbox"}" class="${"toggle svelte-1eorpcm"}"${add_attribute("name", name, 0)}${add_attribute("checked", checked, 1)}>
	<label${add_attribute("for", name, 0)} class="${"svelte-1eorpcm"}">${escape(label)}</label>
</div>`;
});
export {
  Toggle as T
};
