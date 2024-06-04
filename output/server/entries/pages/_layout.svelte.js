import { c as create_ssr_component, a as subscribe, e as each, b as escape, d as add_attribute, v as validate_component } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index2.js";
/* empty css                   */import { b as beforeNavigate, a as afterNavigate } from "../../chunks/navigation.js";
function initToasts() {
  const array = [];
  const timeouts = {};
  const { subscribe: subscribe2, update } = writable(array);
  return {
    subscribe: subscribe2,
    /**
     * Create a new toast notification.
     *
     * @param message notification contents
     * @returns ID which can be used to update the notification
     */
    notify: (message) => {
      const notification = { message, id: Date.now() + Math.random() };
      update((toasts2) => [...toasts2, notification]);
      timeouts[notification.id] = setTimeout(() => {
        update((toasts2) => toasts2.filter((t) => t.id !== notification.id));
      }, 5e3);
      return notification.id;
    },
    /**
     * Update the contents of a notification.
     *
     * @param id ID of the notification to update
     * @param message new notification contents
     */
    update: (id, message) => {
      update((toasts2) => {
        const index = toasts2.findIndex((t) => t.id === id);
        if (index === -1)
          return toasts2;
        toasts2[index].message = message;
        clearTimeout(timeouts[id]);
        timeouts[id] = setTimeout(() => {
          update((toasts3) => toasts3.filter((t) => t.id !== id));
        }, 5e3);
        return toasts2;
      });
    }
  };
}
const toasts = initToasts();
const toasts_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#toasts.svelte-d59je3{display:flex;flex-direction:column;gap:0.5rem;position:fixed;bottom:0;right:0;width:100%;max-width:425px;margin:0;padding:1rem;z-index:100;list-style:none}.toast.svelte-d59je3{position:relative;width:100%;padding:1rem;background-color:white;border:2px solid black}",
  map: null
};
const Toasts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  $$result.css.add(css$2);
  $$unsubscribe_toasts();
  return `<ol id="${"toasts"}" class="${"svelte-d59je3"}">${each($toasts, (toast) => {
    return `<li class="${"toast svelte-d59je3"}">${escape(toast.message)}
		</li>`;
  })}
</ol>`;
});
const loader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loader.svelte-pzrc1t{display:flex;justify-content:center;align-items:center;height:100%}.loader.svelte-pzrc1t::after{content:'';display:inline-block;width:var(--loader-size, 8rem);height:var(--loader-size, 8rem);border-radius:50%;border:0.75rem solid var(--loader-color, #f69d9d);border-top-color:transparent;animation:svelte-pzrc1t-loader-spin 0.8s linear infinite}@keyframes svelte-pzrc1t-loader-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"loader svelte-pzrc1t"}"><style>:global(.loader-medium) {
			--loader-size: 2rem;
		}

		:global(.loader-large) {
			--loader-size: 3rem;
		}
	</style>
	<style>:global(.loader) {
			--loader-color: #000;
		}
	</style>

	
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#mlh-trust-badge.svelte-6afqtj.svelte-6afqtj{z-index:2;position:absolute;display:block;right:15px;top:56px;width:calc(4vw + 3rem)}#mlh-badge-image.svelte-6afqtj.svelte-6afqtj{width:100%}footer.svelte-6afqtj.svelte-6afqtj{background-color:#404040}.footer-flex.svelte-6afqtj.svelte-6afqtj{display:flex;justify-content:space-around;margin:auto;max-width:75em;color:#f2ebd9}.login.svelte-6afqtj.svelte-6afqtj{color:#e1563f}.made-with-love.svelte-6afqtj.svelte-6afqtj{white-space:nowrap;align-self:center}.freetail-link.svelte-6afqtj.svelte-6afqtj{color:#e1563f;text-decoration:underline}.flex-column.svelte-6afqtj.svelte-6afqtj{display:flex;flex-direction:column;font-size:14px}a.svelte-6afqtj.svelte-6afqtj{color:#f2ebd9;text-decoration:none;line-height:1.5}button.svelte-6afqtj.svelte-6afqtj{color:#e1563f;text-decoration:none;line-height:1.5;padding-left:1rem;padding-right:1rem}a.svelte-6afqtj.svelte-6afqtj:hover,button.svelte-6afqtj.svelte-6afqtj:hover{text-decoration-line:underline;text-decoration-color:var(--primary-accent);color:var(--primary-accent)}.category.svelte-6afqtj.svelte-6afqtj{font-size:17px}label.svelte-6afqtj.svelte-6afqtj{display:flex;font-family:'Geologica', sans-serif;font-weight:700;font-style:normal;text-transform:uppercase;color:#f2ebd9}#hamburger-logo.svelte-6afqtj.svelte-6afqtj{display:block;height:2rem;padding-right:1rem;padding-left:1rem}#menu-logo.svelte-6afqtj.svelte-6afqtj{display:none}button.svelte-6afqtj.svelte-6afqtj{background-color:#404040;text-transform:uppercase;font-family:'Geologica', sans-serif;font-weight:700}nav.svelte-6afqtj.svelte-6afqtj{position:fixed;top:0;margin:0;width:100vw;background-color:#404040;z-index:99}menu.svelte-6afqtj.svelte-6afqtj{list-style:none;margin:0;padding:0;transition:all 0.5s ease-out;background-color:#404040;max-height:0;overflow:hidden;width:100%;font-family:'Geologica', sans-serif;font-size:15px;font-weight:700;font-style:normal;text-transform:uppercase}#hamburger.svelte-6afqtj.svelte-6afqtj{display:flex;width:100%;padding-top:0.7rem;padding-bottom:0.7rem;justify-content:flex-start;align-items:center;flex-wrap:nowrap;flex-direction:row}#hamburgerCheckbox.svelte-6afqtj:checked+menu.svelte-6afqtj{display:flex;flex-direction:column;max-height:100vh}menu.svelte-6afqtj a.svelte-6afqtj{display:block;width:100%;padding:0.7rem 1rem;color:#f2ebd9;text-decoration:none}menu.svelte-6afqtj a.svelte-6afqtj:hover,button.svelte-6afqtj.svelte-6afqtj:hover{background-color:#303030}.active.svelte-6afqtj.svelte-6afqtj{font-weight:bold;text-decoration:underline}@media(max-width: 768px){.flex-column.svelte-6afqtj.svelte-6afqtj{display:none}.footer-flex.svelte-6afqtj.svelte-6afqtj{max-width:60vw}}@media(max-width: 1090px){.button.svelte-6afqtj.svelte-6afqtj{display:flex;width:100%;padding-top:0.3rem;padding-bottom:0.7rem;padding-left:1rem;justify-content:flex-start;flex-wrap:nowrap;flex-direction:row}#mlh-trust-badge.svelte-6afqtj.svelte-6afqtj{top:42.2px}}@media(min-width: 1090px){#hamburger-logo.svelte-6afqtj.svelte-6afqtj{display:none}#menu-logo.svelte-6afqtj.svelte-6afqtj{display:block;height:40px}#hamburger.svelte-6afqtj.svelte-6afqtj{display:none}menu.svelte-6afqtj.svelte-6afqtj{margin:0;padding-top:0.5rem;padding-bottom:0.5rem;display:flex;justify-content:space-around;max-height:fit-content;align-items:center}menu.svelte-6afqtj a.svelte-6afqtj:hover,button.svelte-6afqtj.svelte-6afqtj:hover{border-radius:5px}menu.svelte-6afqtj a.svelte-6afqtj{display:inline;width:initial;text-decoration:none}}.overlay.svelte-6afqtj.svelte-6afqtj{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background-color:rgba(0, 0, 0, 0.05);display:flex;justify-content:center;align-items:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const prerender = true;
  let menu;
  let hamburgerCheckbox;
  let isLoading = false;
  beforeNavigate(() => isLoading = true);
  afterNavigate(() => isLoading = false);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  {
    if (typeof $page.form === "string") {
      toasts.notify($page.form);
    }
  }
  $$unsubscribe_page();
  return `<nav class="${"svelte-6afqtj"}"><label for="${"hamburgerCheckbox"}" id="${"hamburger"}" class="${"svelte-6afqtj"}"><img src="${"/burger_Menu.png"}" alt="${"Freetail logo"}" id="${"hamburger-logo"}" style="${"width:50px; height:20px"}" class="${"svelte-6afqtj"}"><b>MENU</b></label>
	<input type="${"checkbox"}" id="${"hamburgerCheckbox"}" style="${"display: none"}" class="${"svelte-6afqtj"}"${add_attribute("this", hamburgerCheckbox, 0)}>
	<menu id="${"menu"}" class="${"svelte-6afqtj"}"${add_attribute("this", menu, 0)}><img src="${"/Freetail_bat.png"}" id="${"menu-logo"}" alt="${"Freetail logo"}" class="${"svelte-6afqtj"}">
		<li><a href="${"/"}" class="${[
    "svelte-6afqtj",
    $page.url.pathname === "/" && $page.url.hash === "" ? "active" : ""
  ].join(" ").trim()}">Home</a></li>
		${!data.user?.roles.includes("ADMIN") ? `<li><a href="${"/#Announcements"}" class="${["svelte-6afqtj", $page.url.hash === "#Announcements" ? "active" : ""].join(" ").trim()}">Announcements</a></li>
			<li><a href="${"/#Schedule"}" class="${["svelte-6afqtj", $page.url.hash === "#Schedule" ? "active" : ""].join(" ").trim()}">Schedule</a></li>
			<li><a href="${"/#FAQ"}" class="${["svelte-6afqtj", $page.url.hash === "#FAQ" ? "active" : ""].join(" ").trim()}">FAQ</a></li>
			<li><a href="${"/#Challenges"}" class="${["svelte-6afqtj", $page.url.hash === "#Challenges" ? "active" : ""].join(" ").trim()}">Challenges</a></li>
			<li><a href="${"/#Sponsors"}" class="${["svelte-6afqtj", $page.url.hash === "#Sponsors" ? "active" : ""].join(" ").trim()}">Sponsors</a></li>` : ``}
		
		${data.user !== void 0 && (!data.user.roles.includes("HACKER") || data.user.roles.length > 1 || data.user.status === "CONFIRMED") ? `<li><a href="${"/id"}" class="${["svelte-6afqtj", $page.url.pathname.startsWith("/id") ? "active" : ""].join(" ").trim()}">My Hacker ID</a></li>` : ``}
		${data.user?.roles.includes("ORGANIZER") || data.user?.roles.includes("ADMIN") ? `<li><a href="${"/scan"}" class="${["svelte-6afqtj", $page.url.pathname.startsWith("/scan") ? "active" : ""].join(" ").trim()}">Scan</a></li>` : ``}
		${data.user?.roles.includes("HACKER") ? `<li><a href="${"/apply"}" class="${["svelte-6afqtj", $page.url.pathname.startsWith("/apply") ? "active" : ""].join(" ").trim()}">Apply</a></li>` : ``}
		${data.user?.roles.includes("ADMIN") || data.user?.roles.includes("SPONSOR") ? `<li>
				<a href="${"/users"}" data-sveltekit-reload class="${["svelte-6afqtj", $page.url.pathname.startsWith("/users") ? "active" : ""].join(" ").trim()}">Users</a></li>
			${data.user?.roles.includes("ADMIN") ? `<li><a href="${"/admin"}" class="${["svelte-6afqtj", $page.url.pathname.startsWith("/admin") ? "active" : ""].join(" ").trim()}">Admin</a></li>
				<li><a href="${"/admissions"}" class="${[
    "svelte-6afqtj",
    $page.url.pathname.startsWith("/admissions") ? "active" : ""
  ].join(" ").trim()}">Admissions</a></li>` : ``}` : ``}
		<li>${data.user === void 0 ? `<a class="${[
    "login svelte-6afqtj",
    $page.url.pathname.startsWith("/login") ? "active" : ""
  ].join(" ").trim()}" href="${"/login"}">Login</a>` : `<form method="${"POST"}" action="${"/logout"}"><button class="${"button svelte-6afqtj"}" type="${"submit"}">Logout</button></form>`}</li></menu>

	${isLoading ? `<div class="${"overlay svelte-6afqtj"}">${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</div>` : ``}</nav>

${$page.url.pathname === "/" ? `<a class="${"banner svelte-6afqtj"}" id="${"mlh-trust-badge"}" href="${"https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=red"}" target="${"_blank"}" rel="${"noreferrer"}"><img src="${"https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-red.svg"}" alt="${"Major League Hacking 2024 Hackathon Season"}" id="${"mlh-badge-image"}" class="${"svelte-6afqtj"}"></a>` : ``}

<div>${slots.default ? slots.default({}) : ``}</div>

${validate_component(Toasts, "Toasts").$$render($$result, {}, {}, {})}

<footer class="${"svelte-6afqtj"}"><div class="${"footer-flex svelte-6afqtj"}"><div class="${"made-with-love svelte-6afqtj"}">Made with ❤️ by <a class="${"freetail-link svelte-6afqtj"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://freetailhackers.com"}">Freetail Hackers</a></div>
		<div class="${"flex-column svelte-6afqtj"}"><div class="${"row category svelte-6afqtj"}">Links</div>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.instagram.com/freetailhackers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}" class="${"svelte-6afqtj"}">Instagram</a>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.linkedin.com/company/freetail-hackers"}" class="${"svelte-6afqtj"}">LinkedIn</a>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://freetailhackers.com/discord"}" class="${"svelte-6afqtj"}">Discord</a>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://docs.google.com/forms/d/e/1FAIpQLSdQld-vgVLXOuIXIcUNpTFMwii_7Cu9Vqj7CVxXs3ScFsCIrg/viewform?usp=sf_link"}" class="${"svelte-6afqtj"}">Feedback</a>
			<a href="${"mailto:admin@freetailhackers.com"}" class="${"svelte-6afqtj"}">Contact Us</a></div>
		<div class="${"flex-column svelte-6afqtj"}"><div class="${"row category svelte-6afqtj"}">Other Hackathons</div>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://rowdyhacks.org/"}" class="${"svelte-6afqtj"}">RowdyHacks</a>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://tamuhack.org/"}" class="${"svelte-6afqtj"}">TAMUhack</a>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://hackutd.co/"}" class="${"svelte-6afqtj"}">HackUTD</a>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.unthackathon.com/"}" class="${"svelte-6afqtj"}">HackUNT</a>
			<a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://hackuta.org"}" class="${"svelte-6afqtj"}">HackUTA</a></div></div>
</footer>`;
});
export {
  Layout as default
};
