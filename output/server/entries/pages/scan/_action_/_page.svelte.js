import { c as create_ssr_component, a as subscribe, o as onDestroy, b as escape, v as validate_component, d as add_attribute } from "../../../../chunks/index3.js";
import "devalue";
import { p as page } from "../../../../chunks/stores.js";
import "marked";
/* empty css                                                          */import "superjson";
import "trpc-sveltekit";
import { Html5QrcodeScannerState } from "html5-qrcode";
import { P as Plot } from "../../../../chunks/Plot.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-aeeaya{width:100%;margin-bottom:1rem}.stats.svelte-aeeaya{margin:1rem 0 0 0}.error.svelte-aeeaya{color:red}.success.svelte-aeeaya{color:green}",
  map: null
};
function scanLogToTotalScans(scans) {
  return [
    {
      x: scans.map((scan) => scan.timestamp),
      y: scans.map((_scan, index) => index + 1)
    }
  ];
}
function scanLogToUsersScanned(scans) {
  const usersScanned = /* @__PURE__ */ new Set();
  const timestamps = [];
  const usersScannedCount = [];
  for (const scan of scans) {
    if (!usersScanned.has(scan.userId)) {
      usersScanned.add(scan.userId);
      timestamps.push(scan.timestamp);
      usersScannedCount.push(usersScanned.size);
    }
  }
  return [{ x: timestamps, y: usersScannedCount }];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let html5QrCode;
  let dialog;
  onDestroy(() => {
    if (html5QrCode?.getState() === Html5QrcodeScannerState.SCANNING)
      ;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1cdq1uh_START -->${$$result.title = `<title>Formula Hacks | Scan - ${escape($page.params.action)}</title>`, ""}<!-- HEAD_svelte-1cdq1uh_END -->`, ""}

<a href="${"/scan"}"><button class="${"svelte-aeeaya"}">Back</button></a>
<div id="${"reader"}"></div>

${data.scans !== null ? `<a href="${"?"}"><button class="${"stats svelte-aeeaya"}">Hide stats</button></a>
	${validate_component(Plot, "Plot").$$render(
    $$result,
    {
      data: scanLogToTotalScans(data.scans),
      layout: {
        xaxis: { title: "Time" },
        yaxis: { title: "Total Scans" },
        showlegend: false,
        margin: { t: 20, r: 0, b: 80, l: 50, pad: 5 },
        hovermode: "x",
        hoverdistance: -1
      },
      fillParent: "width",
      debounce: 250
    },
    {},
    {}
  )}

	${validate_component(Plot, "Plot").$$render(
    $$result,
    {
      data: scanLogToUsersScanned(data.scans),
      layout: {
        xaxis: { title: "Time" },
        yaxis: { title: "Users Scanned" },
        showlegend: false,
        margin: { t: 20, r: 0, b: 80, l: 50, pad: 5 },
        hovermode: "x",
        hoverdistance: -1
      },
      fillParent: "width",
      debounce: 250
    },
    {},
    {}
  )}` : `<a href="${"?stats"}"><button class="${"stats svelte-aeeaya"}">Show stats</button></a>`}

<dialog${add_attribute("this", dialog, 0)}>${`<p class="${"error svelte-aeeaya"}">Could not find this user in the database.</p>
		<button type="${"button"}" class="${"svelte-aeeaya"}">Close</button>`}
</dialog>`;
});
export {
  Page as default
};
