import { c as create_ssr_component, a as subscribe, b as escape, e as each, v as validate_component, d as add_attribute } from "./index3.js";
import { p as page } from "./stores.js";
import { S as SvelteMarkdown } from "./SvelteMarkdown.js";
/* empty css                                         */const css = {
  code: "blockquote.svelte-wt55c6{background:#eee;padding:0.5rem;border-left:none;border-left:#aaa 5px solid}",
  map: null
};
const User_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let application;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { user } = $$props;
  let { questions } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  $$result.css.add(css);
  application = user.application;
  $$unsubscribe_page();
  return `<p><b>Verified Email</b> ${escape(user.authUser?.verifiedEmail)}</p>
<p><b>Role</b> ${escape(user.authUser?.roles.join(", "))}</p>
<p><b>Status</b>
	${escape(user.authUser?.status)}
	${user.decision ? `(Pending ${escape(user.decision.status)})` : ``}</p>
${each(questions, (question) => {
    return `${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: question.label }, {}, {})}
	<blockquote class="${"svelte-wt55c6"}">${application[question.id] === void 0 || application[question.id] === "" ? `<i>No answer given</i>` : `${question.type === "FILE" ? `<a${add_attribute("href", `/files/${user.authUserId}/${question.id}`, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}">${escape(`${$page.url.origin}/files/${user.authUserId}/${question.id}`)}</a>` : `${Array.isArray(application[question.id]) ? `${escape(application[question.id].join(", "))}` : `${escape(application[question.id])}`}`}`}
	</blockquote>`;
  })}`;
});
export {
  User_card as U
};
