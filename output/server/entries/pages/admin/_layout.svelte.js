import { c as create_ssr_component, a as subscribe } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-yrr8bo.svelte-yrr8bo{margin-bottom:0}ul.svelte-yrr8bo.svelte-yrr8bo{list-style:none;margin:0;padding:0}ul.svelte-yrr8bo li.svelte-yrr8bo{padding-top:15px}hr.svelte-yrr8bo.svelte-yrr8bo{margin:1rem 0}.active.svelte-yrr8bo.svelte-yrr8bo{font-weight:bold}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"main-content"}"><h1 class="${"svelte-yrr8bo"}">Admin Panel</h1>

	<ul class="${"svelte-yrr8bo"}"><li class="${"svelte-yrr8bo"}"><a href="${"/admin"}" class="${["svelte-yrr8bo", $page.url.pathname === "/admin" ? "active" : ""].join(" ").trim()}">Admissions</a></li>
		<li class="${"svelte-yrr8bo"}"><a href="${"/admin/email"}" class="${["svelte-yrr8bo", $page.url.pathname === "/admin/email" ? "active" : ""].join(" ").trim()}">Email</a></li>
		<li class="${"svelte-yrr8bo"}"><a href="${"/admin/questions"}" class="${[
    "svelte-yrr8bo",
    $page.url.pathname === "/admin/questions" ? "active" : ""
  ].join(" ").trim()}">Registration Questions</a></li>
		<li class="${"svelte-yrr8bo"}"><a href="${"/admin/homepage"}" class="${["svelte-yrr8bo", $page.url.pathname === "/admin/homepage" ? "active" : ""].join(" ").trim()}">Homepage</a></li></ul>

	<hr class="${"svelte-yrr8bo"}">

	${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
