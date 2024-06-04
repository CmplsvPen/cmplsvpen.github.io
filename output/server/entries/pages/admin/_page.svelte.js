import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape, e as each } from "../../../chunks/index3.js";
import "devalue";
import { T as Toggle } from "../../../chunks/toggle.js";
import { Status } from "@prisma/client";
import { P as Plot } from "../../../chunks/Plot.js";
const lineGraph_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".graph-container.svelte-vo53i6{width:100%;height:300px;overflow:hidden}",
  map: null
};
const Line_graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { statusChanges } = $$props;
  const statuses = Object.keys(Status);
  const statusColorMap = /* @__PURE__ */ new Map([
    ["CREATED", "lightgray"],
    ["APPLIED", "rgb(63, 63, 63)"],
    ["ACCEPTED", "rgb(93, 198, 93)"],
    ["REJECTED", "rgb(255, 78, 78)"],
    ["WAITLISTED", "orange"],
    ["CONFIRMED", "darkgreen"],
    ["DECLINED", "darkred"]
  ]);
  function statusChangesToStatusCounts(statusChanges2) {
    const statusCounts = Object.fromEntries(statuses.map((status) => [status, [0]]));
    const userStatuses = /* @__PURE__ */ new Map();
    for (const status of statuses) {
      userStatuses.set(status, /* @__PURE__ */ new Set());
    }
    for (let entry of statusChanges2) {
      const { newStatus, userId } = entry;
      statuses.forEach((status) => {
        if (userStatuses.get(status)?.has(userId)) {
          userStatuses.get(status)?.delete(userId);
        }
      });
      userStatuses.get(newStatus)?.add(userId);
      statuses.forEach((status) => {
        statusCounts[status].push(userStatuses.get(status)?.size ?? 0);
      });
    }
    return statusCounts;
  }
  function generateStatusCountHistory(statusCounts) {
    const timestamps = [
      statusChanges[0]?.timestamp,
      ...statusChanges.map((statusChange) => statusChange.timestamp)
    ];
    const plotlyData = Object.keys(statusCounts).map((status) => {
      const plotlyDatum = {
        x: timestamps,
        y: statusCounts[status],
        mode: "lines",
        name: status,
        line: { color: statusColorMap.get(status) }
      };
      return plotlyDatum;
    });
    const totalLine = {
      x: timestamps,
      y: timestamps.map((timestamp, i) => {
        return Object.values(statusCounts).reduce((sum, statusCount) => sum + statusCount[i], 0);
      }),
      mode: "lines",
      name: "TOTAL",
      line: { color: "#bf5700", width: 4 }
    };
    plotlyData.push(totalLine);
    return plotlyData;
  }
  if ($$props.statusChanges === void 0 && $$bindings.statusChanges && statusChanges !== void 0)
    $$bindings.statusChanges(statusChanges);
  $$result.css.add(css$1);
  return `<div class="${"graph-container svelte-vo53i6"}">${validate_component(Plot, "Plot").$$render(
    $$result,
    {
      data: generateStatusCountHistory(statusChangesToStatusCounts(statusChanges)),
      layout: {
        xaxis: { title: "Time" },
        yaxis: { title: "User Count" },
        showlegend: false,
        margin: { t: 20, r: 0, b: 80, l: 50, pad: 5 },
        hovermode: "x unified",
        hoverdistance: -1
      },
      fillParent: "width",
      debounce: 250
    },
    {},
    {}
  )}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-3gg8b2{padding-top:10px}button.svelte-3gg8b2{margin-top:30px;width:100%;margin-bottom:1rem}#release.svelte-3gg8b2{font-weight:bold;margin-top:0;padding-top:0;text-transform:uppercase}label.svelte-3gg8b2{display:block;margin-bottom:0.5rem}input.svelte-3gg8b2,textarea.svelte-3gg8b2{flex-grow:1;width:100%}status-container.svelte-3gg8b2{margin-top:1rem}input[readonly].svelte-3gg8b2{background-color:rgb(182, 182, 182)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let applicationOpenStatus = data.settings.applicationOpen;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1w9pveq_START -->${$$result.title = `<title>Formula Hacks | Admin - Admissions</title>`, ""}<!-- HEAD_svelte-1w9pveq_END -->`, ""}

<form method="${"POST"}" action="${"?/settings"}" class="${"svelte-3gg8b2"}"><label for="${"applicationStatus"}" class="${"svelte-3gg8b2"}"><h2>Application Status</h2></label>

	${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        name: "applicationOpen",
        label: "Accept new applications",
        checked: applicationOpenStatus
      },
      {
        checked: ($$value) => {
          applicationOpenStatus = $$value;
          $$settled = false;
        }
      },
      {}
    )}

	<status-container class="${"svelte-3gg8b2"}"><label for="${"applicationDeadline"}" class="${"svelte-3gg8b2"}">Hackers must apply before:</label>
		<input ${!applicationOpenStatus ? "readonly" : ""} type="${"datetime-local"}" name="${"applicationDeadline"}" id="${"applicationDeadline"}"${add_attribute("value", data.settings.applicationDeadline?.toLocaleString("sv", { timeZone: data.settings.timezone }).replace(" ", "T").slice(0, -3), 0)} class="${"svelte-3gg8b2"}"></status-container>

	<status-container class="${"svelte-3gg8b2"}"><label for="${"applicationLimit"}" class="${"svelte-3gg8b2"}">Hackers can only apply if there are at most this number of accounts with status APPLIED,
			ACCEPTED, or CONFIRMED (leaving empty will disable this limit)</label>
		<input ${!applicationOpenStatus ? "readonly" : ""} type="${"number"}" name="${"applicationLimit"}" id="${"applicationLimit"}"${add_attribute("value", data.settings.applicationLimit, 0)} placeholder="${"10000"}" min="${"0"}" class="${"svelte-3gg8b2"}"></status-container>

	<label for="${"statusChangeText"}" class="${"svelte-3gg8b2"}"><h2>User Status Count Over Time</h2></label>
	${validate_component(Line_graph, "Graph").$$render($$result, { statusChanges: data.graph }, {}, {})}

	<label for="${"daysToRSVP"}" class="${"svelte-3gg8b2"}"><h2>Hackers have this many days after being accepted to RSVP (leave blank to disable RSVPs)</h2></label>
	<input type="${"number"}" id="${"daysToRSVP"}" name="${"daysToRSVP"}" placeholder="${"10"}" min="${"0"}"${add_attribute("value", data.settings.daysToRSVP, 0)} class="${"svelte-3gg8b2"}">

	<label for="${"scanActions"}" class="${"svelte-3gg8b2"}"><h2>Scan Options</h2></label>
	<textarea name="${"scanActions"}" id="${"scanActions"}" placeholder="${"Write one option per line, like this:\rOPTION 1\rOPTION 2\rOPTION 3"}" class="${"svelte-3gg8b2"}">${escape(data.settings.scanActions.join("\n"), true)}</textarea>

	<label for="${"timezone"}" class="${"svelte-3gg8b2"}"><h2>Timezone</h2></label>
	<select name="${"timezone"}" id="${"timezone"}"${add_attribute("value", data.settings.timezone, 0)}>${each(Intl.supportedValuesOf("timeZone"), (timezone) => {
      return `<option${add_attribute("value", timezone, 0)}>${escape(timezone)}</option>`;
    })}</select>

	<button type="${"submit"}" class="${"svelte-3gg8b2"}">Save</button></form>

<h2>Pending Decisions</h2>
<form method="${"POST"}" action="${"?/release"}" class="${"svelte-3gg8b2"}"><button id="${"release"}" class="${"svelte-3gg8b2"}">Release all ${escape(Object.values(data.decisions).reduce((sum, array) => sum + array.length, 0))} pending
		decisions</button>
</form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
