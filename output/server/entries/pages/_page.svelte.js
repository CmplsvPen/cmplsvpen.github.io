import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute, g as null_to_empty } from "../../chunks/index3.js";
import "devalue";
import { S as SvelteMarkdown } from "../../chunks/SvelteMarkdown.js";
import { M as Markdown_editor } from "../../chunks/markdown-editor.js";
/* empty css                   */import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
const announcements_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".announcement-card.svelte-1mo7g8y.svelte-1mo7g8y{background:ivory}.announcement-container.svelte-1mo7g8y.svelte-1mo7g8y{padding:20px;max-width:75rem;margin:auto;font-family:'Fugaz One';color:#e1563f}.bg-img.svelte-1mo7g8y.svelte-1mo7g8y{background-color:#1c1c1c}.announcementHeader.svelte-1mo7g8y.svelte-1mo7g8y{text-align:center;font-size:clamp(1rem, 6vw, 5rem);font-weight:400;text-shadow:0 4px 12px black;margin:0 auto}.bottom-right-image.svelte-1mo7g8y.svelte-1mo7g8y{background-size:contain;background-position:center bottom;background-repeat:no-repeat;position:absolute;bottom:0;right:0;width:75px;height:75px}.announcement-button-label.svelte-1mo7g8y.svelte-1mo7g8y{color:#1d1d1c;font-family:'Fugaz One'}.no-announcements-message.svelte-1mo7g8y.svelte-1mo7g8y{text-align:center;font-size:20px;margin-top:20px;margin-bottom:40px}p.svelte-1mo7g8y.svelte-1mo7g8y{display:flex;align-items:center;font-size:20px;color:#e1563f;margin:0;flex-grow:1}p.svelte-1mo7g8y span.date.svelte-1mo7g8y{margin-right:10px}p.svelte-1mo7g8y span.time.svelte-1mo7g8y{font-size:10px;opacity:0.6}.pad.svelte-1mo7g8y.svelte-1mo7g8y{padding-top:15px}.announcement-text.svelte-1mo7g8y.svelte-1mo7g8y{font-family:'Fugaz One';color:#1d1d1c;font-weight:400;margin-top:-10px}ul.svelte-1mo7g8y.svelte-1mo7g8y{list-style:none;padding-left:0}li.svelte-1mo7g8y.svelte-1mo7g8y{display:flex;justify-content:center;flex-direction:column;background-color:#ffffff;padding:1rem 2rem 2rem;margin-bottom:1rem;margin-top:1.5rem;position:relative}span.svelte-1mo7g8y.svelte-1mo7g8y{display:flex}.deleteButton.svelte-1mo7g8y.svelte-1mo7g8y{display:inline;height:initial;background-color:transparent;color:gray}",
  map: null
};
const Announcements = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { admin } = $$props;
  let { announcements } = $$props;
  if ($$props.admin === void 0 && $$bindings.admin && admin !== void 0)
    $$bindings.admin(admin);
  if ($$props.announcements === void 0 && $$bindings.announcements && announcements !== void 0)
    $$bindings.announcements(announcements);
  $$result.css.add(css$6);
  return `<div class="${"bg-img svelte-1mo7g8y"}"><div class="${"announcement-container svelte-1mo7g8y"}"><h1 class="${"announcementHeader svelte-1mo7g8y"}">ANNOUNCEMENTS</h1>
		${admin ? `<form class="${"pad svelte-1mo7g8y"}" method="${"POST"}" action="${"?/announce"}">${validate_component(Markdown_editor, "MarkdownEditor").$$render(
    $$result,
    {
      name: "announcement",
      placeholder: "Make an announcement here...",
      required: true,
      useAnnouncementFont: true
    },
    {},
    {}
  )}
				<button class="${"announcement-button-label svelte-1mo7g8y"}">Announce</button></form>` : ``}
		${announcements.length > 0 ? `<ul class="${"svelte-1mo7g8y"}">${each(announcements, (announcement) => {
    return `<li class="${"announcement-card svelte-1mo7g8y"}"><span class="${"svelte-1mo7g8y"}"><p class="${"svelte-1mo7g8y"}"><span class="${"date svelte-1mo7g8y"}">${escape(announcement.published.toLocaleDateString("en-us", { month: "long", day: "numeric" }))}</span>
								<span class="${"time svelte-1mo7g8y"}">${escape(announcement.published.toLocaleTimeString("en-us", { hour: "numeric", minute: "numeric" }))}
								</span></p>
							${admin ? `<form method="${"POST"}" action="${"?/unannounce"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", announcement.id, 0)}>
									<button class="${"deleteButton svelte-1mo7g8y"}">✕</button>
								</form>` : ``}</span>
						<div class="${"announcement-text svelte-1mo7g8y"}">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: announcement.body }, {}, {})}</div>
						
						<div class="${"bottom-right-image svelte-1mo7g8y"}"><svg id="${"triangle"}" viewBox="${"0 0 100 100"}"><polygon points="${"101 30, 101 101, 0 101"}" fill="${"#1c1c1c"}"></polygon></svg></div>
					</li>`;
  })}</ul>` : `<p class="${"no-announcements-message svelte-1mo7g8y"}">There are no announcements at this time.</p>`}</div>
</div>`;
});
const accordion_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".accordion.svelte-l4rjbr.svelte-l4rjbr{margin-bottom:2rem;color:var(--highlight-color)}.header.svelte-l4rjbr.svelte-l4rjbr{display:flex;width:100%}.header.svelte-l4rjbr .text.svelte-l4rjbr{flex:1;margin-left:1rem}.details.svelte-l4rjbr.svelte-l4rjbr{padding:0.5rem;color:#7d7a72}",
  map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$5);
  return `<div class="${"accordion svelte-l4rjbr"}"><div class="${"header svelte-l4rjbr"}"><span class="${"sign"}">${escape(open ? "-" : "+")}</span>
		<span class="${"text svelte-l4rjbr"}">${slots.head ? slots.head({}) : ``}</span></div>

	${open ? `<div class="${"details svelte-l4rjbr"}">${slots.details ? slots.details({}) : ``}</div>` : ``}
</div>`;
});
const faq_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".background.svelte-9ofz6b{background-color:var(--background-color);display:flex;justify-content:center}.faq-container.svelte-9ofz6b{display:flex;max-width:75rem;padding:3em 0;padding-right:2em}.faq-title-container.svelte-9ofz6b{position:sticky;top:10vh;height:650px;width:7rem;flex-shrink:0}.faq-title.svelte-9ofz6b{display:flex;flex-direction:column;flex-shrink:0}.left-border-faq.svelte-9ofz6b,.left-border-faq-2.svelte-9ofz6b{font-family:'Zen Dots', sans-serif;font-size:7rem;color:var(--highlight-color);writing-mode:vertical-rl}.left-border-faq-2.svelte-9ofz6b{color:transparent;-webkit-text-stroke:0.1rem var(--highlight-color)}.faq-questions.svelte-9ofz6b{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:min-content;margin-top:1em;cursor:default;user-select:none}.faq-questions-col-1.svelte-9ofz6b,.faq-questions-col-2.svelte-9ofz6b{flex-grow:1;padding-left:5vw}h1.svelte-9ofz6b{font-family:'Fugaz One';color:var(--highlight-color);text-align:center;font-size:36px;margin:0}@media(max-width: 768px){.faq-container.svelte-9ofz6b{flex-direction:column;width:100vw;padding-top:4vw}.faq-title-container.svelte-9ofz6b{display:flex;position:unset;height:unset;width:auto;justify-content:center;align-self:center}.left-border-faq.svelte-9ofz6b{text-align:center;margin-bottom:1rem;font-size:9.5vw;writing-mode:unset;padding-top:unset;font-size:64px;font-weight:400}.left-border-faq-2.svelte-9ofz6b{display:none}.faq-questions.svelte-9ofz6b{grid-template-columns:auto;padding-left:0;gap:0}}.edit.svelte-9ofz6b{margin:0px}.question-answer.svelte-9ofz6b{padding-bottom:0px;user-select:text}",
  map: null
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { questions } = $$props;
  let columnOne = questions.slice(0, Math.ceil(questions.length / 2));
  let columnTwo = questions.slice(Math.ceil(questions.length / 2) + 1);
  let questionsSplit = [columnOne, columnTwo];
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  $$result.css.add(css$4);
  return `${$$result.head += `<!-- HEAD_svelte-ca82zc_START -->${$$result.title = `<title>Formula Hacks | FAQ</title>`, ""}<!-- HEAD_svelte-ca82zc_END -->`, ""}

<div class="${"background svelte-9ofz6b"}"><div class="${"faq-container svelte-9ofz6b"}"><div class="${"faq-title-container svelte-9ofz6b"}"><div class="${"faq-title svelte-9ofz6b"}"><h1 class="${"left-border-faq svelte-9ofz6b"}">FAQ</h1>
				<h1 class="${"left-border-faq-2 svelte-9ofz6b"}">FAQ</h1></div></div>
		<div class="${"faq-questions svelte-9ofz6b"}">${questionsSplit.length > 0 ? `${each({ length: 2 }, (_i, idx) => {
    return `<div class="${"faq-questions-col-" + escape(2 - idx % 2, true) + " svelte-9ofz6b"}">${each(questionsSplit[idx], (question) => {
      return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
        details: () => {
          return `<div slot="${"details"}" class="${"question-answer svelte-9ofz6b"}">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: question.response }, {}, {})}
									${user?.roles.includes("ADMIN") ? `<p class="${"edit svelte-9ofz6b"}"><a href="${"/admin/homepage/faq/" + escape(question.id, true)}">Edit</a>
										</p>` : ``}
								</div>`;
        },
        head: () => {
          return `<span slot="${"head"}" class="${"question-title"}">${escape(question.title)}</span>`;
        }
      })}`;
    })}
					</div>`;
  })}` : `<h2>Check back for the FAQ!</h2>`}</div></div>
</div>`;
});
const schedule_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".topographic-background.svelte-x3immj.svelte-x3immj{padding-bottom:5rem;background:linear-gradient(\r\n				to bottom,\r\n				#1c1c1cff 0%,\r\n				transparent 30%,\r\n				transparent 60%,\r\n				#1c1c1cff 100%\r\n			),\r\n			url('/Topographic Background.svg');background-size:110%}.sidebar.svelte-x3immj.svelte-x3immj{width:16rem;margin:0 5px}h1.svelte-x3immj.svelte-x3immj{color:var(--highlight-color);font-size:64px;font-weight:400;margin:0;text-align:center;text-shadow:0 4px 12px black;padding-top:48px}h2.svelte-x3immj.svelte-x3immj{color:var(--highlight-color);font-family:'Fugaz One';font-size:36px;text-shadow:0 4px 8px rgb(0, 0, 0)}button.svelte-x3immj.svelte-x3immj{background-color:var(--highlight-color);color:#303030;height:2rem;font-family:'Geologica', sans-serif;border-radius:4px;margin:2px 2px;flex-grow:1;justify-content:center}.button-container.svelte-x3immj.svelte-x3immj{display:flex;flex-wrap:wrap}.active.svelte-x3immj.svelte-x3immj{background-color:#303030;color:var(--highlight-color)}p.svelte-x3immj.svelte-x3immj{margin:0 0 0}.date.svelte-x3immj.svelte-x3immj,.date-hover.svelte-x3immj.svelte-x3immj,.name.svelte-x3immj.svelte-x3immj{font-size:18px}.location.svelte-x3immj.svelte-x3immj,.description.svelte-x3immj.svelte-x3immj{font-size:14px}.date-hover.svelte-x3immj.svelte-x3immj,.date.svelte-x3immj.svelte-x3immj{text-align:right;flex-shrink:0}.description.svelte-x3immj.svelte-x3immj{padding-top:3px}.description.svelte-x3immj.svelte-x3immj,.date-hover.svelte-x3immj.svelte-x3immj{display:none}.calendar-export.svelte-x3immj.svelte-x3immj{text-decoration:none;color:#303030}.flex-row.svelte-x3immj.svelte-x3immj{display:flex;justify-content:space-between}.card.svelte-x3immj.svelte-x3immj{box-shadow:0 4px 8px rgb(0, 0, 0);background-color:#303030;border-radius:10px;display:flex;flex-direction:column;padding:0.75rem;margin-bottom:0.75rem}.currentEvent.svelte-x3immj.svelte-x3immj{border:solid var(--primary-accent) 4px;padding-bottom:calc(1rem - 4px)}.card.svelte-x3immj.svelte-x3immj:hover{background-color:var(--highlight-color)}.card.svelte-x3immj:hover .description.svelte-x3immj,.card.svelte-x3immj:hover .date-hover.svelte-x3immj{display:initial}.card.svelte-x3immj:hover .date.svelte-x3immj{display:none}.card-text.svelte-x3immj.svelte-x3immj,.empty-events.svelte-x3immj.svelte-x3immj{color:var(--highlight-color)}.card-text.svelte-x3immj.svelte-x3immj:hover{color:#303030}.container.svelte-x3immj.svelte-x3immj{display:flex;flex-wrap:wrap;max-width:75rem;margin:auto}.column.svelte-x3immj.svelte-x3immj{flex:1;margin:0px 5px}@media(max-width: 768px){.topographic-background.svelte-x3immj.svelte-x3immj,.card.svelte-x3immj.svelte-x3immj{user-select:none}h1.svelte-x3immj.svelte-x3immj{font-size:9.5vw}h2.svelte-x3immj.svelte-x3immj{font-size:6vw}.sidebar.svelte-x3immj.svelte-x3immj{width:unset}.container.svelte-x3immj.svelte-x3immj{flex-direction:column;margin:0 10px 0 10px}}",
  map: null
};
const Schedule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(customParseFormat);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  let { user } = $$props;
  let { schedule } = $$props;
  let { settings_timezone } = $$props;
  let currentTime = /* @__PURE__ */ new Date();
  let groupByDateArray = [];
  for (let event of schedule) {
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(event.start).getDay()];
    let dayEntry = groupByDateArray.find((entry) => entry.day === dayOfWeek);
    if (!dayEntry) {
      dayEntry = { day: dayOfWeek, events: [] };
      groupByDateArray.push(dayEntry);
    }
    dayEntry.events.push(event);
  }
  let selected = null;
  let filters = [...new Set(schedule.map((event) => event.type))];
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.schedule === void 0 && $$bindings.schedule && schedule !== void 0)
    $$bindings.schedule(schedule);
  if ($$props.settings_timezone === void 0 && $$bindings.settings_timezone && settings_timezone !== void 0)
    $$bindings.settings_timezone(settings_timezone);
  $$result.css.add(css$3);
  return `${schedule.length > 0 ? `<div class="${"topographic-background svelte-x3immj"}"><h1 class="${"svelte-x3immj"}">Schedule</h1>
		<div class="${"container svelte-x3immj"}"><div class="${"sidebar svelte-x3immj"}"><h2 class="${"svelte-x3immj"}">Filters</h2>
				<div class="${"button-container svelte-x3immj"}">${each(filters, (filter) => {
    return `<button${add_attribute("data-name", filter, 0)} class="${["svelte-x3immj", selected === filter ? "active" : ""].join(" ").trim()}">${escape(filter)}
						</button>`;
  })}

					${``}</div></div>
			${each(groupByDateArray, ({ day, events }) => {
    return `<div class="${"column svelte-x3immj"}"><h2 class="${"svelte-x3immj"}">${escape(day)}</h2>
					${`${each(events, (event) => {
      return `${`<div class="${[
        "card card-text svelte-x3immj",
        currentTime >= event.start && currentTime < event.end ? "currentEvent" : ""
      ].join(" ").trim()}"><div class="${"flex-row svelte-x3immj"}"><div><p class="${"name svelte-x3immj"}">${escape(event.name)}</p>
											<p class="${"location svelte-x3immj"}">${escape(event.location)}</p>
											${user?.roles.includes("ADMIN") ? `<p class="${"svelte-x3immj"}"><a class="${"edit"}" href="${"/admin/homepage/schedule/" + escape(event.id, true)}">Edit</a>
												</p>` : ``}</div>
										<p class="${"date svelte-x3immj"}">${escape(event.start.toLocaleString("en-US", {
        timeZone: settings_timezone,
        hour: "numeric",
        minute: "numeric",
        hour12: true
      }))}</p>
										<p class="${"date-hover svelte-x3immj"}">from ${escape(event.start.toLocaleString("en-US", {
        timeZone: settings_timezone,
        hour: "numeric",
        minute: "numeric",
        hour12: true
      }))} <br> to ${escape(event.end.toLocaleString("en-US", {
        timeZone: settings_timezone,
        hour: "numeric",
        minute: "numeric",
        hour12: true
      }))}
										</p></div>

									<p class="${"description svelte-x3immj"}">${escape(event.description)}</p>
								</div>`}`;
    })}`}
				</div>`;
  })}</div></div>` : ``}`;
});
const sponsors_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".nohover.svelte-1u2rmt8.svelte-1u2rmt8{pointer-events:none}.main-container.svelte-1u2rmt8.svelte-1u2rmt8{position:relative;background-color:#1c1c1c;overflow:hidden}button.svelte-1u2rmt8.svelte-1u2rmt8{font-size:20px;display:block;margin:20px auto;padding:0 2em;box-shadow:0 0.5rem 0.75rem black}.background-grid.svelte-1u2rmt8.svelte-1u2rmt8{width:inherit;height:inherit;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1;pointer-events:none;opacity:0.8;object-fit:cover;mask-image:linear-gradient(\r\n			to bottom,\r\n			transparent 0%,\r\n			rgba(0, 0, 0, 0.5) 40%,\r\n			rgba(0, 0, 0, 0.5) 60%,\r\n			transparent 100%\r\n		)}.content-container.svelte-1u2rmt8.svelte-1u2rmt8{position:relative;padding:40px;box-sizing:border-box;z-index:2}h1.svelte-1u2rmt8.svelte-1u2rmt8,p.svelte-1u2rmt8.svelte-1u2rmt8{text-align:center;font-size:20px;color:#f2ebd9}h1.svelte-1u2rmt8.svelte-1u2rmt8{font-size:64px;font-weight:400;margin:0;padding:24px 0;color:#e1563f;text-shadow:0 4px 12px black;white-space:nowrap}a.svelte-1u2rmt8.svelte-1u2rmt8{color:#f2ebd9;text-decoration:none}.sponsor-container.svelte-1u2rmt8.svelte-1u2rmt8{display:flex;justify-content:space-evenly;flex-wrap:wrap;max-width:1200px;margin:0 auto}.sponsor-card.svelte-1u2rmt8.svelte-1u2rmt8{flex:0 0 calc(33.333% - 20px);margin:10px;margin-bottom:25px;background-color:#fffff9;padding:10px;box-sizing:border-box;max-width:300px;text-align:center;display:flex;align-items:center;justify-content:center;box-shadow:10px 10px #e1563f;transition:all 0.4s ease}.sponsor-card.svelte-1u2rmt8 img.svelte-1u2rmt8{max-height:150px;max-width:100%;height:auto;display:block;margin:0 auto}.sponsor-card.svelte-1u2rmt8.svelte-1u2rmt8:hover{border-radius:0% 0% 50% 50% / 0% 0% 5% 5%;box-shadow:10px 10px rgba(165, 0, 0, 0.781)}@media(max-width: 768px){h1.svelte-1u2rmt8.svelte-1u2rmt8{font-size:9.5vw;padding:16px}button.svelte-1u2rmt8.svelte-1u2rmt8,p.svelte-1u2rmt8.svelte-1u2rmt8{font-size:16px}}",
  map: null
};
const Sponsors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sponsors } = $$props;
  if ($$props.sponsors === void 0 && $$bindings.sponsors && sponsors !== void 0)
    $$bindings.sponsors(sponsors);
  $$result.css.add(css$2);
  return `<div class="${"main-container svelte-1u2rmt8"}"><img class="${"background-grid svelte-1u2rmt8"}" src="${"/Grid.png"}" alt="${"Grid Background"}">
	<div class="${"content-container svelte-1u2rmt8"}"><h1 class="${"svelte-1u2rmt8"}">Sponsors</h1>
		<p class="${"svelte-1u2rmt8"}">Our success is fueled by incredible sponsors hosting workshops, job opportunities, prizes, and
			more.
		</p>

		
		<button class="${"svelte-1u2rmt8"}"><a href="${"mailto:corporate@freetailhackers.com"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"svelte-1u2rmt8"}">Become a sponsor</a></button>
		<div class="${"sponsor-container svelte-1u2rmt8"}">${each(sponsors, (sponsor) => {
    return `<div class="${"sponsor-card svelte-1u2rmt8"}"><a${add_attribute("href", sponsor[1], 0)} target="${"_blank"}" rel="${"noopener noreferrer"}" class="${["svelte-1u2rmt8", sponsor[1] === "#" ? "nohover" : ""].join(" ").trim()}"><img${add_attribute("alt", sponsor[0], 0)}${add_attribute("src", `/Sponsors/${sponsor[0]}.png`, 0)} class="${"svelte-1u2rmt8"}"></a>
				</div>`;
  })}</div></div>
</div>`;
});
const challenges_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".challenges-container.svelte-tt8z4p.svelte-tt8z4p{flex-wrap:wrap;max-width:75rem;margin:auto}.checkered-background.svelte-tt8z4p.svelte-tt8z4p{background-color:#303030;background-image:url('/Checkered Background.svg');background-size:cover}.bordered-text.svelte-tt8z4p.svelte-tt8z4p{font-family:'Zen Dots';font-style:normal;color:#1d1d1c;-webkit-text-stroke:1px #f2ebd9}h1.svelte-tt8z4p.svelte-tt8z4p{color:#ffffff;font-size:40px;font-weight:400;margin:0;text-align:center;text-shadow:0 4px 12px black;padding-top:48px}.container.svelte-tt8z4p.svelte-tt8z4p{display:flex;flex-wrap:wrap;justify-content:center;margin:0px auto;max-width:90%}.challenge-box.svelte-tt8z4p.svelte-tt8z4p{word-wrap:break-word;position:relative;width:100%;height:150px;border-radius:10px;border:3px solid white;background-color:rgba(255, 255, 255, 0);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:bold;transition:background-color 0.3s ease, border 0.3s ease;cursor:pointer;margin-bottom:10px;user-select:none}.challenge-box.flipped.svelte-tt8z4p.svelte-tt8z4p{background-color:#e1563f;border-color:transparent}.challenge-box.flipped.svelte-tt8z4p .content.svelte-tt8z4p{color:#f2ebd9}.challenge-box.svelte-tt8z4p .content.svelte-tt8z4p{text-align:center;font-family:'Zen Dots';font-style:normal;font-size:24px;transition:top 0.3s ease;position:absolute;transform:translate(-50%, -50%);font-size:1.5em}.challenge-wrapper.svelte-tt8z4p.svelte-tt8z4p{width:50%;padding:10px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center}.challenge-wrapper.svelte-tt8z4p:hover .content.svelte-tt8z4p{top:30%}.content.svelte-tt8z4p.svelte-tt8z4p{text-align:center;font-family:'Zen Dots';font-style:normal;font-size:24px;top:50%;left:50%;width:75%;transform:translate(-50%, -50%);transition:top 0.3s ease}.description-text.svelte-tt8z4p.svelte-tt8z4p{font-family:'Geologica';font-style:normal;font-size:14px;top:50%;left:50%;width:87.5%;transition:top 0.3s ease;user-select:none;font-size:0.8em}.challenge-box.svelte-tt8z4p.svelte-tt8z4p:hover{background-color:#e1563f;color:#f2ebd9}.challenge-box.svelte-tt8z4p:hover .content.svelte-tt8z4p{top:40%}.flipped.svelte-tt8z4p.svelte-tt8z4p{background-color:#e1563f;color:#f2ebd9}.desktop.svelte-tt8z4p.svelte-tt8z4p{display:block}.mobile.svelte-tt8z4p.svelte-tt8z4p{display:none}@media(max-width: 768px){.desktop.svelte-tt8z4p.svelte-tt8z4p{display:none}.mobile.svelte-tt8z4p.svelte-tt8z4p{display:block}.challenge-wrapper.svelte-tt8z4p.svelte-tt8z4p{width:100%}.challenge-box.svelte-tt8z4p .content.svelte-tt8z4p{font-size:min(4vw, 36px)}.challenge-box.svelte-tt8z4p .description-text.svelte-tt8z4p{font-size:min(2.5vw, 24px)}}",
  map: null
};
const Challenges = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { challenges } = $$props;
  let flippedCard = null;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.challenges === void 0 && $$bindings.challenges && challenges !== void 0)
    $$bindings.challenges(challenges);
  $$result.css.add(css$1);
  return `${challenges.length > 0 ? `<div class="${"checkered-background svelte-tt8z4p"}"><div class="${"challenges-container svelte-tt8z4p"}"><h1 class="${"desktop svelte-tt8z4p"}"><span class="${"bordered-text svelte-tt8z4p"}" data-text="${"Challenges"}">Challenges</span> Challenges
				<span class="${"bordered-text svelte-tt8z4p"}" data-text="${"Challenges"}">Challenges</span></h1>
			<h1 class="${"mobile svelte-tt8z4p"}">Challenges</h1>

			<div class="${"container svelte-tt8z4p"}">${each(challenges, (challenge) => {
    return `${challenge.category === "CHALLENGE" ? `<div class="${"challenge-wrapper svelte-tt8z4p"}"><div class="${[
      "challenge-box svelte-tt8z4p",
      flippedCard === challenge.title ? "flipped" : ""
    ].join(" ").trim()}"><div class="${escape(
      null_to_empty(flippedCard === challenge.title ? "description-text" : "content"),
      true
    ) + " svelte-tt8z4p"}">${escape(flippedCard === challenge.title ? challenge.response : challenge.title)}
								</div></div>
							${user?.roles.includes("ADMIN") ? `<div class="${"edit"}"><a href="${"/admin/homepage/challenges/" + escape(challenge.id, true)}">Edit</a>
								</div>` : ``}
						</div>` : ``}`;
  })}</div></div></div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1jyht47{scroll-margin-top:5vh}.home-svg.svelte-1jyht47{width:100vw;margin-top:calc(2rem - 0.5vw);user-select:none;pointer-events:none}.topographic-background.svelte-1jyht47{display:flex;flex-direction:column;align-items:center;background:linear-gradient(to bottom, transparent 0%, #1c1c1c 100%),\r\n			url('/Topographic Background.svg');background-size:110%;position:relative}.homepage-text.svelte-1jyht47{position:absolute;top:73%;left:15%;color:#f2ebd9;font-size:clamp(0.75rem, 2vw, 2rem);max-width:50rem;margin-right:4rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1vp4eif_START -->${$$result.title = `<title>Formula Hacks | Home</title>`, ""}<!-- HEAD_svelte-1vp4eif_END -->`, ""}

<div class="${"topographic-background svelte-1jyht47"}"><div>
		<img src="${"/Landing.svg"}" alt="${"svg"}" class="${"home-svg svelte-1jyht47"}">
		<div class="${"homepage-text svelte-1jyht47"}">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: data.settings.homepageText }, {}, {})}</div></div></div>
<div>${data.user !== void 0 ? `
		<section id="${"Announcements"}" class="${"svelte-1jyht47"}">${validate_component(Announcements, "Announcements").$$render(
    $$result,
    {
      announcements: data.announcements,
      admin: data.user.roles.includes("ADMIN")
    },
    {},
    {}
  )}</section>` : `<section id="${"Announcements"}" class="${"svelte-1jyht47"}">${validate_component(Announcements, "Announcements").$$render(
    $$result,
    {
      announcements: data.announcements,
      admin: false
    },
    {},
    {}
  )}</section>`}</div>

<section id="${"Schedule"}" class="${"svelte-1jyht47"}">${validate_component(Schedule, "Schedule").$$render(
    $$result,
    {
      user: data.user,
      schedule: data.schedule,
      settings_timezone: data.settings.timezone
    },
    {},
    {}
  )}</section>

<section id="${"FAQ"}" class="${"svelte-1jyht47"}">${validate_component(Faq, "FAQ").$$render($$result, { user: data.user, questions: data.faqs }, {}, {})}</section>

<section id="${"Challenges"}" class="${"svelte-1jyht47"}">${validate_component(Challenges, "Challenges").$$render(
    $$result,
    {
      user: data.user,
      challenges: data.challenges
    },
    {},
    {}
  )}</section>

<section id="${"Sponsors"}" class="${"svelte-1jyht47"}">${validate_component(Sponsors, "Sponsors").$$render(
    $$result,
    {
      sponsors: [
        ["Roblox", "https://create.roblox.com/landing"],
        ["Capital One", "http://api.nessieisreal.com/"],
        ["CodeCrafters", "https://codecrafters.io/event/freetailhackers"],
        ["Red Bull", "#"],
        ["Stand Out Stickers", "http://hackp.ac/mlh-StandOutStickers-hackathons"]
      ]
    },
    {},
    {}
  )}
</section>`;
});
export {
  Page as default
};
