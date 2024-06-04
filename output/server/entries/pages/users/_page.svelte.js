import { c as create_ssr_component, d as add_attribute, b as escape, e as each, v as validate_component, a as subscribe } from "../../../chunks/index3.js";
import "devalue";
import { U as User_card } from "../../../chunks/user-card.js";
import { p as page } from "../../../chunks/stores.js";
import { a as afterNavigate } from "../../../chunks/navigation.js";
import "superjson";
import "trpc-sveltekit";
import { P as Plot } from "../../../chunks/Plot.js";
import "file-saver";
import "jszip";
import { D as Dropdown } from "../../../chunks/dropdown.js";
const userTable_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-193fp5h.svelte-193fp5h{list-style:none;margin:0;padding:0}li.svelte-193fp5h.svelte-193fp5h{border:2px solid black;margin-top:-2px}#header.svelte-193fp5h.svelte-193fp5h{display:flex;flex-direction:column;padding:1rem}#actions.svelte-193fp5h select.svelte-193fp5h{width:7rem}.flex-align-center.svelte-193fp5h.svelte-193fp5h{display:flex;align-items:center}#actions.svelte-193fp5h.svelte-193fp5h{padding-top:0.5rem;display:flex;flex-direction:column;gap:0.5rem}#actions.svelte-193fp5h>.svelte-193fp5h{height:2.5rem}summary.svelte-193fp5h.svelte-193fp5h{list-style:none;padding:1rem;cursor:pointer;transition:margin 0.1s ease-out}summary.svelte-193fp5h a.svelte-193fp5h{min-width:0;overflow:hidden;text-overflow:ellipsis}.grow.svelte-193fp5h.svelte-193fp5h{flex-grow:1}.dot.svelte-193fp5h.svelte-193fp5h{border-radius:50%;display:inline-block;margin:0 1rem;min-height:20px;max-height:20px;min-width:20px;max-width:20px}details[open].svelte-193fp5h summary.svelte-193fp5h{margin-bottom:2rem}.user.svelte-193fp5h.svelte-193fp5h{margin-top:-2rem;margin-bottom:1rem}summary.svelte-193fp5h.svelte-193fp5h::after{content:' ►'}details[open].svelte-193fp5h summary.svelte-193fp5h:after{content:' ▼'}details.svelte-193fp5h>div.svelte-193fp5h{padding:0 1rem 0 1rem}.accepted.svelte-193fp5h.svelte-193fp5h{background:rgb(93, 198, 93)}.rejected.svelte-193fp5h.svelte-193fp5h{background:rgb(255, 78, 78)}.waitlisted.svelte-193fp5h.svelte-193fp5h{background:orange}.applied.svelte-193fp5h.svelte-193fp5h{background:rgb(63, 63, 63)}.created.svelte-193fp5h.svelte-193fp5h{background:lightgray}.confirmed.svelte-193fp5h.svelte-193fp5h{background:darkgreen}.declined.svelte-193fp5h.svelte-193fp5h{background:darkred}",
  map: null
};
const User_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let { users } = $$props;
  let { self } = $$props;
  let { questions } = $$props;
  let action = "admissions";
  let selectAll;
  function validateSelection(action2, selected2) {
    const selectedUsers = users.filter((_, i) => selected2[i]);
    if (action2 === "") {
      throw "You must select an action.";
    }
    if (selectedUsers.length === 0) {
      throw "You must select at least one user.";
    }
    if (action2 === "admissions") {
      if (selectedUsers.filter((user) => user.authUser.status !== "APPLIED" && user.authUser.status !== "WAITLISTED").length > 0) {
        throw "You can only perform admissions on users that have applied or are waitlisted.";
      }
      return `${selected2.filter(Boolean).length} selected users will be added to the pending decisions pool.
						These decisions will NOT be visible until you release them.`;
    }
    if (action2 === "status") {
      return `${selected2.filter(Boolean).length} selected users will have their status immediately set.
					This will NOT send any notifications and WILL delete any pending (unreleased) decisions.`;
    }
    if (action2 === "add-role") {
      if (selectedUsers.filter((user) => user.authUserId === self.id).length > 0) {
        throw "You cannot change your own role.";
      }
      return `${selected2.filter(Boolean).length} selected users will have the chosen role assigned to them.`;
    }
    if (action2 === "remove-role") {
      if (selectedUsers.filter((user) => user.authUserId === self.id).length > 0) {
        throw "You cannot change your own role.";
      }
      return `${selected2.filter(Boolean).length} selected users will have the chosen role removed.`;
    }
    if (action2 === "release") {
      if (selectedUsers.filter((user) => user.decision === null).length > 0) {
        throw "You can only release decisions for users with a pending decision.";
      }
      return `${selected2.filter(Boolean).length} selected users will have their decisions released.`;
    }
  }
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  if ($$props.self === void 0 && $$bindings.self && self !== void 0)
    $$bindings.self(self);
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  $$result.css.add(css$2);
  selected = users.map(() => false);
  return `<form method="${"POST"}" action="${"?/bulk"}"><ul class="${"svelte-193fp5h"}">${self.roles.includes("ADMIN") ? `
			<li id="${"header"}" class="${"svelte-193fp5h"}"><div class="${"flex-align-center svelte-193fp5h"}"><input type="${"checkbox"}" id="${"selectAll"}"${add_attribute("this", selectAll, 0)}>
					Select an action:
				</div>
				<div id="${"actions"}" class="${"svelte-193fp5h"}"><div class="${"flex-align-center svelte-193fp5h"}"><input type="${"radio"}" name="${"action"}" id="${"user-admissions"}" value="${"admissions"}"${add_attribute("checked", true, 1)}>
						<label for="${"user-admissions"}">Admissions: </label>
						<span class="${"grow svelte-193fp5h"}"></span>
						<select name="${"user-admissions"}" class="${"svelte-193fp5h"}"><option value="${"ACCEPTED"}">Accept</option><option value="${"REJECTED"}">Reject</option><option value="${"WAITLISTED"}">Waitlist</option></select></div>
					<div class="${"flex-align-center svelte-193fp5h"}"><input type="${"radio"}" name="${"action"}" id="${"user-status"}" value="${"status"}"${""}>
						<label for="${"user-status"}">Set status: </label>
						<span class="${"grow svelte-193fp5h"}"></span>
						<select name="${"user-status"}" class="${"svelte-193fp5h"}"><option value="${"CREATED"}">Created</option><option value="${"APPLIED"}">Applied</option><option value="${"ACCEPTED"}">Accepted</option><option value="${"REJECTED"}">Rejected</option><option value="${"WAITLISTED"}">Waitlisted</option><option value="${"CONFIRMED"}">Confirmed</option><option value="${"DECLINED"}">Declined</option></select></div>
					<div class="${"flex-align-center svelte-193fp5h"}"><input type="${"radio"}" name="${"action"}" id="${"add-role"}" value="${"add-role"}"${""}>
						<label for="${"add-role"}">Add role: </label>
						<span class="${"grow svelte-193fp5h"}"></span>
						<select name="${"role-to-add"}" class="${"svelte-193fp5h"}"><option value="${"HACKER"}">Hacker</option><option value="${"ADMIN"}">Admin</option><option value="${"ORGANIZER"}">Organizer</option><option value="${"JUDGE"}">Judge</option><option value="${"VOLUNTEER"}">Volunteer</option><option value="${"SPONSOR"}">Sponsor</option></select></div>
					<div class="${"flex-align-center svelte-193fp5h"}"><input type="${"radio"}" name="${"action"}" id="${"remove-role"}" value="${"remove-role"}"${""}>
						<label for="${"remove-role"}">Remove role: </label>
						<span class="${"grow svelte-193fp5h"}"></span>
						<select name="${"role-to-remove"}" class="${"svelte-193fp5h"}"><option value="${"HACKER"}">Hacker</option><option value="${"ADMIN"}">Admin</option><option value="${"ORGANIZER"}">Organizer</option><option value="${"JUDGE"}">Judge</option><option value="${"VOLUNTEER"}">Volunteer</option><option value="${"SPONSOR"}">Sponsor</option></select></div>
					<div class="${"flex-align-center svelte-193fp5h"}"><input type="${"radio"}" name="${"action"}" id="${"user-release"}" value="${"release"}"${""}>
						<label for="${"user-release"}">Release decisions</label></div>
					${escape((() => {
    try {
      return validateSelection(action, selected);
    } catch (e) {
      return e;
    }
  })())}
					<button type="${"submit"}" ${(() => {
    try {
      validateSelection(action, selected);
      return false;
    } catch (e) {
      return true;
    }
  })() ? "disabled" : ""} class="${"svelte-193fp5h"}">Confirm
					</button></div></li>` : ``}

		
		${each(users, (user, i) => {
    return `<li class="${"svelte-193fp5h"}"><details class="${"svelte-193fp5h"}"><summary class="${"flex-align-center svelte-193fp5h"}">${self.roles.includes("ADMIN") ? `<input type="${"checkbox"}"${add_attribute("name", "id " + user.authUserId, 0)} ${selected[i] ? "checked" : ""}>` : ``}
						<a href="${"mailto:" + escape(user.authUser.email, true)}" class="${"svelte-193fp5h"}">${escape(user.authUser.email)}</a>
						<span class="${"grow svelte-193fp5h"}"></span>
						<span class="${escape(user.authUser.status.toLowerCase(), true) + " dot svelte-193fp5h"}"${add_attribute("title", user.decision?.status ?? user.authUser.status, 0)}></span></summary>
					<div class="${"user svelte-193fp5h"}">${validate_component(User_card, "UserCard").$$render($$result, { user, questions }, {}, {})}
					</div></details>
			</li>`;
  })}</ul>
</form>`;
});
const statistics_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-rxprd{width:100%;margin:0.5rem 0}.graph-container.svelte-rxprd{width:100%;height:300px;overflow:hidden}.question-label.svelte-rxprd{padding:10px 20px}",
  map: null
};
function frequencyToPieChartData(answerData) {
  return {
    type: "pie",
    labels: Object.keys(answerData),
    values: Object.values(answerData),
    textinfo: "none"
  };
}
function frequencyToBoxPlotData(answerData) {
  const data = Object.entries(answerData).flatMap(([response, frequency]) => {
    const numericResponse = Number(response);
    if (Number.isNaN(numericResponse)) {
      return [];
    } else {
      return Array.from({ length: frequency }, () => numericResponse);
    }
  });
  return {
    type: "box",
    boxpoints: false,
    x: data,
    orientation: "h",
    showlegend: false,
    name: ""
  };
}
function getWordFrequencyStatisticsMap(answerData, totalResponses) {
  return Object.entries(answerData).map(([word, [totalFrequency, frequencyPerResponse]]) => ({
    word,
    totalFrequency,
    frequencyPerResponse,
    percentage: (frequencyPerResponse / totalResponses * 100).toFixed(2)
  })).sort((a, b) => b.totalFrequency - a.totalFrequency);
}
const Statistics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let stats = null;
  let { questions } = $$props;
  let { count } = $$props;
  afterNavigate(() => {
    stats = null;
  });
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `${stats === null ? `<button class="${"svelte-rxprd"}">Show statistics</button>` : `<button class="${"svelte-rxprd"}">Hide statistics</button>
	${Object.keys(stats).length === 0 ? `<p>No statistics available.</p>` : ``}
	${each(questions, (question) => {
    return `${stats[question.id] !== void 0 ? `<details><summary class="${"question-label svelte-rxprd"}">${escape(question.label)}</summary>
				${question.type === "NUMBER" ? `<div class="${"graph-container svelte-rxprd"}">${validate_component(Plot, "Plot").$$render(
      $$result,
      {
        data: [frequencyToBoxPlotData(stats[question.id])],
        layout: {
          showlegend: false,
          margin: { t: 20, r: 50, b: 50, l: 20 }
        },
        fillParent: "width",
        debounce: 250
      },
      {},
      {}
    )}
					</div>` : `${question.type === "SENTENCE" || question.type === "PARAGRAPH" ? (() => {
      let sortedWords = getWordFrequencyStatisticsMap(stats[question.id], count);
      return `
					<ol>${each(sortedWords, ({ word, totalFrequency, percentage }) => {
        return `<li><strong>${escape(word)}</strong> - Appears ${escape(totalFrequency)} times (${escape(percentage)}% of
								responses)
							</li>`;
      })}
					</ol>`;
    })() : `<div class="${"graph-container svelte-rxprd"}">${validate_component(Plot, "Plot").$$render(
      $$result,
      {
        data: [frequencyToPieChartData(stats[question.id])],
        layout: {
          showlegend: true,
          legend: { orientation: "h" },
          margin: { t: 20, r: 50, b: 50, l: 20 }
        },
        fillParent: true,
        debounce: 250
      },
      {},
      {}
    )}
					</div>`}`}
			</details>` : ``}`;
  })}`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filter.svelte-p4jwmf.svelte-p4jwmf{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:0.3rem;width:100%;min-width:0;flex-wrap:wrap}.key.svelte-p4jwmf.svelte-p4jwmf{flex:1;min-width:50%}.search.svelte-p4jwmf.svelte-p4jwmf{flex:2;max-width:100%}.searchFilter.svelte-p4jwmf.svelte-p4jwmf{flex:1;max-width:50%}.filter.svelte-p4jwmf button.svelte-p4jwmf{min-width:100%}#page.svelte-p4jwmf.svelte-p4jwmf{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:0.5rem;width:100%;justify-content:center}#page.svelte-p4jwmf input.svelte-p4jwmf{width:3.5rem}.disabled.svelte-p4jwmf.svelte-p4jwmf{pointer-events:none;text-decoration:none;opacity:0.5}.download-button.svelte-p4jwmf.svelte-p4jwmf{width:100%;text-align:center;margin-bottom:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let key = $page.url.searchParams.get("key") ?? "email";
  let search = $page.url.searchParams.get("search") ?? "";
  let limit = $page.url.searchParams.get("limit") ?? "10";
  let searchFilter = $page.url.searchParams.get("searchFilter") ?? "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    query = Object.fromEntries($page.url.searchParams);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-2jzwnk_START -->${$$result.title = `<title>Formula Hacks | Users</title>`, ""}<!-- HEAD_svelte-2jzwnk_END -->`, ""}

<div class="${"main-content"}"><h1>Master Database</h1>
	${data.user.roles.includes("ADMIN") ? `<a${add_attribute("href", "/users/download-data" + $page.url.search, 0)} download="${"users.csv"}"><button class="${"download-button svelte-p4jwmf"}">Download user data (excluding file uploads) for ${escape(data.count)} users as CSV</button></a>` : ``}
	<button class="${"download-button svelte-p4jwmf"}">Download file uploads from ${escape(data.count)} users as ZIP</button>

	
	<form data-sveltekit-keepfocus><fieldset class="${"filter svelte-p4jwmf"}"><select name="${"key"}" class="${"key svelte-p4jwmf"}" placeholder="${"Choose criteria"}"><option value="${"email"}">Email</option>${data.user.roles.includes("ADMIN") ? `<option value="${"role"}">Role</option>
					<option value="${"status"}">Status</option>
					<option value="${"decision"}">Decision</option>` : ``}<optgroup label="${"Questions"}">${each(data.questions, (question) => {
      return `<option${add_attribute("value", question.id, 0)}>${escape(question.label)}</option>`;
    })}</optgroup>${data.user.roles.includes("ADMIN") ? `<optgroup label="${"Scan Options"}">${each(data.settings.scanActions, (scanAction) => {
      return `<option${add_attribute("value", scanAction, 0)}>${escape(scanAction)}</option>`;
    })}</optgroup>` : ``}</select>

			${key === "role" ? `<select name="${"search"}" class="${"search svelte-p4jwmf"}"><option value="${"HACKER"}">HACKER</option><option value="${"ADMIN"}">ADMIN</option><option value="${"ORGANIZER"}">ORGANIZER</option><option value="${"JUDGE"}">JUDGE</option><option value="${"VOLUNTEER"}">VOLUNTEER</option><option value="${"SPONSOR"}">SPONSOR</option></select>` : `${key === "status" ? `<select name="${"search"}" class="${"search svelte-p4jwmf"}"><option value="${"CREATED"}">CREATED</option><option value="${"APPLIED"}">APPLIED</option><option value="${"ACCEPTED"}">ACCEPTED</option><option value="${"REJECTED"}">REJECTED</option><option value="${"WAITLISTED"}">WAITLISTED</option><option value="${"CONFIRMED"}">CONFIRMED</option><option value="${"DECLINED"}">DECLINED</option></select>` : `${key === "email" ? `<input type="${"text"}" id="${"search"}" name="${"search"}" placeholder="${"Search"}" autocomplete="${"off"}" class="${"search svelte-p4jwmf"}"${add_attribute("value", search, 0)}>` : `${key === "decision" ? `<select name="${"search"}" class="${"search svelte-p4jwmf"}"><option value="${"ACCEPTED"}">ACCEPTED</option><option value="${"WAITLISTED"}">WAITLISTED</option><option value="${"REJECTED"}">REJECTED</option></select>` : `${data.settings.scanActions.includes(key) ? `<select name="${"searchFilter"}" class="${"search svelte-p4jwmf"}"><option value="${"greater"}">greater than</option><option value="${"greater_equal"}">greater than or equal to</option><option value="${"less"}">less than</option><option value="${"less_equal"}">less than or equal to</option><option value="${"equal"}">equal to</option><option value="${"not_equal"}">not equal to</option></select>
				<input type="${"number"}" id="${"search"}" name="${"search"}" placeholder="${"Number"}" autocomplete="${"off"}" class="${"search svelte-p4jwmf"}" min="${"0"}"${add_attribute("value", search, 0)}>` : `${each(data.questions, (question) => {
      return `${question.id === key ? `${question.type === "SENTENCE" || question.type === "PARAGRAPH" ? `<select name="${"searchFilter"}" class="${"searchFilter svelte-p4jwmf"}"><option value="${"exact"}">is exactly</option><option value="${"contains"}" selected>contains</option><option value="${"unanswered"}">is not answered</option></select>
							${searchFilter !== "unanswered" ? `<input type="${"text"}" id="${"search"}" name="${"search"}" placeholder="${"Search"}" autocomplete="${"off"}" class="${"search svelte-p4jwmf"}"${add_attribute("value", search, 0)}>` : ``}` : `${question.type === "NUMBER" ? `<select name="${"searchFilter"}" class="${"searchFilter svelte-p4jwmf"}"><option value="${"greater"}">greater than</option><option value="${"greater_equal"}">greater than or equal to</option><option value="${"less"}">less than</option><option value="${"less_equal"}">less than or equal to</option><option value="${"equal"}">equal to</option><option value="${"not_equal"}">not equal to</option><option value="${"unanswered"}">unanswered</option></select>
							${searchFilter !== "unanswered" ? `<input type="${"number"}" id="${"search"}" name="${"search"}" placeholder="${"Number"}" autocomplete="${"off"}" class="${"search svelte-p4jwmf"}"${add_attribute("value", search, 0)}>` : ``}` : `${question.type === "DROPDOWN" ? `${question.multiple ? `<select name="${"searchFilter"}" class="${"searchFilter svelte-p4jwmf"}"><option value="${"contains"}">contains</option><option value="${"exactly"}">is exactly</option><option value="${"unanswered"}">unanswered</option></select>` : `<select name="${"searchFilter"}" class="${"searchFilter svelte-p4jwmf"}"><option value="${"is"}" selected>is</option><option value="${"is_not"}" selected>is not</option><option value="${"unanswered"}">unanswered</option></select>`}
							${searchFilter !== "unanswered" ? `${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          name: "search",
          class: "search",
          items: question.options,
          custom: Boolean(question.custom),
          multiple: Boolean(question.multiple),
          json: true,
          value: search
        },
        {
          value: ($$value) => {
            search = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}` : `${question.type === "CHECKBOX" ? `<select name="${"searchFilter"}" class="${"searchFilter svelte-p4jwmf"}"><option value="${"true"}">is true</option><option value="${"false"}">is false</option></select>` : `${question.type === "RADIO" ? `<select name="${"searchFilter"}" class="${"searchFilter svelte-p4jwmf"}"><option value="${"is"}" selected>is</option><option value="${"is_not"}" selected>is not</option><option value="${"unanswered"}">unanswered</option></select>
							${searchFilter !== "unanswered" ? `<select name="${"search"}" class="${"search svelte-p4jwmf"}">${each(question.options, (option) => {
        return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
      })}</select>` : ``}` : `${question.type === "FILE" ? `<select name="${"searchFilter"}" class="${"searchFilter svelte-p4jwmf"}"><option value="${"uploaded"}">has uploaded file</option><option value="${"not_uploaded"}">has not uploaded file</option></select>` : ``}`}`}`}`}`}` : ``}`;
    })}`}`}`}`}`}
			<input type="${"hidden"}" name="${"limit"}"${add_attribute("value", limit, 0)}>
			<button class="${"svelte-p4jwmf"}">Search</button></fieldset></form>

	${data.users.length === 0 ? `<p>No results found.</p>` : `${validate_component(Statistics, "Statistics").$$render(
      $$result,
      {
        questions: data.questions,
        count: data.count
      },
      {},
      {}
    )}
		
		<div class="${"filter svelte-p4jwmf"}"><p>Results ${escape(data.start)} through ${escape(data.start + data.users.length - 1)} of ${escape(data.count)}:
			</p>
			<select name="${"limit"}"><option value="${"10"}">Show 10</option><option value="${"25"}">Show 25</option><option value="${"50"}">Show 50</option><option value="${"100"}">Show 100</option></select></div>
		${validate_component(User_table, "UserTable").$$render(
      $$result,
      {
        users: data.users,
        self: data.user,
        questions: data.questions
      },
      {},
      {}
    )}

		
		<form><p id="${"page"}" class="${"svelte-p4jwmf"}"><a data-sveltekit-noscroll${add_attribute("href", `?${new URLSearchParams({ ...query, page: "1" })}`, 0)} class="${[
      "svelte-p4jwmf",
      Number($page.url.searchParams.get("page") ?? 1) === 1 ? "disabled" : ""
    ].join(" ").trim()}">&lt;&lt;</a>
				<a data-sveltekit-noscroll${add_attribute(
      "href",
      `?${new URLSearchParams({
        ...query,
        page: String(Number($page.url.searchParams.get("page") ?? 1) - 1)
      })}`,
      0
    )} class="${[
      "svelte-p4jwmf",
      Number($page.url.searchParams.get("page") ?? 1) === 1 ? "disabled" : ""
    ].join(" ").trim()}">&lt;</a>
				Page
				<input type="${"number"}" name="${"page"}" min="${"1"}"${add_attribute("max", data.pages, 0)}${add_attribute("value", $page.url.searchParams.get("page") ?? 1, 0)} class="${"svelte-p4jwmf"}">
				of ${escape(data.pages)}
				<a data-sveltekit-noscroll${add_attribute(
      "href",
      `?${new URLSearchParams({
        ...query,
        page: String(Number($page.url.searchParams.get("page") ?? 1) + 1)
      })}`,
      0
    )} class="${[
      "svelte-p4jwmf",
      Number($page.url.searchParams.get("page") ?? 1) >= data.pages ? "disabled" : ""
    ].join(" ").trim()}">&gt;</a>
				<a data-sveltekit-noscroll${add_attribute("href", `?${new URLSearchParams({ ...query, page: String(data.pages) })}`, 0)} class="${[
      "svelte-p4jwmf",
      Number($page.url.searchParams.get("page") ?? 1) >= data.pages ? "disabled" : ""
    ].join(" ").trim()}">&gt;&gt;</a></p>
			${each([...$page.url.searchParams], ([key2, value]) => {
      return `${key2 !== "page" ? `<input type="${"hidden"}"${add_attribute("name", key2, 0)}${add_attribute("value", value, 0)}>` : ``}`;
    })}</form>`}
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
