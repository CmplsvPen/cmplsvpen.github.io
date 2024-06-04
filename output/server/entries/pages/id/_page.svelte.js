import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index3.js";
import "qrcode";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".overall-container.svelte-161vb7i{display:flex;padding-top:56px;justify-content:center;align-items:center;min-height:calc(100vh - 159px)}.vertical-text.svelte-161vb7i{font-size:70px;color:transparent;-webkit-text-stroke:0.5px #ffc75b;text-shadow:0.8em -0.35em var(--highlight-color), -0.4em 1em #e96954;writing-mode:vertical-rl}.driver-div.svelte-161vb7i{padding:1rem 2rem;box-shadow:4px 4px 16px 0px #00000040;border-radius:10px;margin:5rem 0}.driver-div-text.svelte-161vb7i{font-family:'Fugaz One';font-size:2.3rem}.ready-to-scan.svelte-161vb7i{writing-mode:vertical-rl;height:25rem;margin:30px;text-align:right}.ready-to-scan-text-ready.svelte-161vb7i{margin:0;font-weight:normal;margin-bottom:30%;font-family:'Geologica', sans-serif}.ready-to-scan-text-scan.svelte-161vb7i{margin:0;font-weight:bold;font-family:'Fugaz One', sans-serif}.driver-div-text.svelte-161vb7i:last-of-type{margin-top:-20px}.red.svelte-161vb7i{color:var(--primary-accent)}@media only screen and (max-width: 767px){.overall-container.svelte-161vb7i{flex-direction:column;min-height:calc(100vh - 56px)}.vertical-text.svelte-161vb7i{writing-mode:horizontal-tb;font-size:40px;text-align:center;-webkit-text-stroke:0px transparent;text-shadow:-0.03em -0.03em #e96954, 0.1em 0.1em var(--highlight-color)}.driver-div.svelte-161vb7i{margin:0;padding:0 1rem}.driver-div-text.svelte-161vb7i{font-size:25px}.ready-to-scan.svelte-161vb7i{writing-mode:horizontal-tb;height:auto;width:21rem}.ready-to-scan-text-ready.svelte-161vb7i{font-size:15px;margin:0}.ready-to-scan-text-scan.svelte-161vb7i{font-size:20px;margin-top:6px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let canvas;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-i9h62d_START -->${$$result.title = `<title>Formula Hacks | Hacker ID</title>`, ""}<!-- HEAD_svelte-i9h62d_END -->`, ""}

<div class="${"overall-container svelte-161vb7i"}"><h1 class="${"vertical-text svelte-161vb7i"}">HACKER ID</h1>

	<div class="${"driver-div svelte-161vb7i"}"><h1 class="${"driver-div-text svelte-161vb7i"}">Driver</h1>
		<h1 class="${"driver-div-text red  svelte-161vb7i"}">License</h1>
		<canvas id="${"qrcode"}"${add_attribute("this", canvas, 0)}></canvas></div>

	<div class="${"ready-to-scan svelte-161vb7i"}"><h4 class="${"ready-to-scan-text-ready svelte-161vb7i"}">Are you ready?</h4>
		<h2 class="${"ready-to-scan-text-scan red svelte-161vb7i"}">Show to Scan</h2></div>
</div>`;
});
export {
  Page as default
};
