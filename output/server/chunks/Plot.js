import { c as create_ssr_component, j as createEventDispatcher, o as onDestroy, b as escape, g as null_to_empty, d as add_attribute } from "./index3.js";
import { debounce } from "lodash-es";
const Plot_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fillParent.svelte-kyrhf8{overflow:visible}.fillParentWidth.svelte-kyrhf8{width:0 !important;max-width:0 !important}.fillParentHeight.svelte-kyrhf8{height:0 !important;max-height:0 !important}",
  map: null
};
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 300;
const Plot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let debounceWait;
  let debounceOptions;
  let layout_;
  let config_;
  let draw;
  let fillParentWidth;
  let fillParentHeight;
  let parent;
  const browser = typeof window === "object";
  const nextFrame = browser ? requestAnimationFrame : () => void 0;
  async function loadPlotly() {
    if (!browser)
      return;
    if (libPlotly === void 0) {
      if (window.Plotly) {
        libPlotly = window.Plotly;
      } else {
        const p = await import("plotly.js-dist");
        if (libPlotly === void 0)
          libPlotly = "default" in p ? p.default : p;
      }
    }
  }
  const events = {
    plotly_afterexport: "afterExport",
    plotly_afterplot: "afterPlot",
    plotly_animated: "animated",
    plotly_animating: "animating",
    plotly_animatingframe: "animatingFrame",
    plotly_animationinterrupted: "animationInterrupted",
    plotly_autosize: "autoSize",
    plotly_beforeexport: "beforeExport",
    plotly_beforehover: "beforeHover",
    plotly_beforeplot: "beforePlot",
    plotly_buttonclicked: "buttonClicked",
    plotly_click: "click",
    plotly_clickannotation: "clickAnnotation",
    plotly_deselect: "deselect",
    plotly_doubleclick: "doubleClick",
    plotly_framework: "framework",
    plotly_hover: "hover",
    plotly_legendclick: "legendClick",
    plotly_legenddoubleclick: "legendDoubleClick",
    plotly_react: "react",
    plotly_redraw: "redraw",
    plotly_relayout: "relayout",
    plotly_relayouting: "relayouting",
    plotly_restyle: "restyle",
    plotly_selected: "selected",
    plotly_selecting: "selecting",
    plotly_sliderchange: "sliderChange",
    plotly_sliderend: "sliderEnd",
    plotly_sliderstart: "sliderStart",
    plotly_sunburstclick: "sunburstClick",
    plotly_transitioned: "transitioned",
    plotly_transitioning: "transitioning",
    plotly_transitioninterrupted: "transitionInterrupted",
    plotly_unhover: "unhover",
    plotly_update: "update",
    plotly_webglcontextlost: "webGLContextLost"
  };
  const dispatch = createEventDispatcher();
  let { element = void 0 } = $$props;
  let { plot = void 0 } = $$props;
  let { libPlotly = void 0 } = $$props;
  let { data } = $$props;
  let { layout = void 0 } = $$props;
  let { config = void 0 } = $$props;
  let { fillParent = false } = $$props;
  let { debounce: debounce$1 = 0 } = $$props;
  let { class: className = "" } = $$props;
  let datarevision = 0;
  let previousLib = libPlotly;
  let previousPlot = plot;
  let width = DEFAULT_WIDTH;
  let height = DEFAULT_HEIGHT;
  const drawUndebounced = (lib, e, d, l, c) => {
    if (e)
      lib?.react(e, d, l, c).then((p) => plot = p);
  };
  onDestroy(() => element && libPlotly?.purge(element));
  function onResize() {
    if (!parent || !element)
      return;
    const { offsetHeight, offsetWidth } = parent;
    const { paddingLeft, paddingTop, paddingRight, paddingBottom } = window.getComputedStyle(parent);
    const maxWidth = offsetWidth - parseInt(paddingLeft) - parseInt(paddingRight);
    const maxHeight = offsetHeight - parseInt(paddingTop) - parseInt(paddingRight);
    width = fillParentWidth ? maxWidth : DEFAULT_WIDTH;
    height = fillParentHeight ? maxHeight : DEFAULT_HEIGHT;
  }
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.plot === void 0 && $$bindings.plot && plot !== void 0)
    $$bindings.plot(plot);
  if ($$props.libPlotly === void 0 && $$bindings.libPlotly && libPlotly !== void 0)
    $$bindings.libPlotly(libPlotly);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.fillParent === void 0 && $$bindings.fillParent && fillParent !== void 0)
    $$bindings.fillParent(fillParent);
  if ($$props.debounce === void 0 && $$bindings.debounce && debounce$1 !== void 0)
    $$bindings.debounce(debounce$1);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css);
  debounceWait = typeof debounce$1 === "object" ? debounce$1.wait : debounce$1 ?? 0;
  debounceOptions = typeof debounce$1 === "object" ? debounce$1 : {};
  {
    datarevision = (datarevision + 1) % 1e3;
  }
  layout_ = { datarevision, width, height, ...layout };
  config_ = { displaylogo: false, ...config };
  draw = debounce(drawUndebounced, debounceWait, debounceOptions);
  {
    draw(libPlotly, element, data, layout_, config_);
  }
  {
    {
      if (element && previousLib !== libPlotly) {
        previousLib?.purge(element);
        plot = void 0;
      }
      previousLib = libPlotly;
      loadPlotly();
    }
  }
  {
    if (previousPlot !== plot) {
      for (const [plotlyEvent, svelteEvent] of Object.entries(events)) {
        previousPlot?.removeAllListeners?.(plotlyEvent);
        plot?.on(plotlyEvent, (e) => dispatch(svelteEvent, e));
      }
      previousPlot = plot;
    }
  }
  {
    nextFrame(onResize);
  }
  fillParentWidth = fillParent === true || fillParent === "width";
  fillParentHeight = fillParent === true || fillParent === "height";
  parent = element?.parentElement;
  return `<div class="${[
    escape(null_to_empty(className), true) + " svelte-kyrhf8",
    (fillParent ? "fillParent" : "") + " " + (fillParentWidth ? "fillParentWidth" : "") + " " + (fillParentHeight ? "fillParentHeight" : "")
  ].join(" ").trim()}"${add_attribute("this", element, 0)}></div>`;
});
export {
  Plot as P
};
