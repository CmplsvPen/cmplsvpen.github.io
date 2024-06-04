import { a as authenticate } from "../../../chunks/authenticate.js";
import { t as trpc } from "../../../chunks/router.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(utc);
dayjs.extend(timezone);
const load = async ({ locals }) => {
  await authenticate(locals.auth, ["ADMIN"]);
  return {
    decisions: await trpc(locals.auth).admissions.getDecisions(),
    settings: await trpc(locals.auth).settings.getAll(),
    graph: await trpc(locals.auth).users.getStatusChanges()
  };
};
const actions = {
  settings: async ({ locals, request }) => {
    const formData = await request.formData();
    const timezone2 = formData.get("timezone");
    let applicationDeadline;
    try {
      applicationDeadline = dayjs.tz(formData.get("applicationDeadline"), timezone2).toDate();
    } catch (e) {
      applicationDeadline = null;
    }
    const applicationLimitRaw = formData.get("applicationLimit");
    let applicationLimit = parseInt(applicationLimitRaw);
    if (isNaN(applicationLimit)) {
      applicationLimit = null;
    }
    const applicationOpen = formData.get("applicationOpen") === "on";
    const parsedDaysToRSVP = parseInt(formData.get("daysToRSVP"), 10);
    const daysToRSVP = isNaN(parsedDaysToRSVP) ? null : parsedDaysToRSVP;
    const scanActions = formData.get("scanActions").split("\r\n").map((option) => option.trim()).filter(Boolean);
    await trpc(locals.auth).settings.update({
      applicationOpen,
      daysToRSVP,
      scanActions,
      timezone: timezone2,
      applicationDeadline,
      applicationLimit
    });
    return "Saved settings!";
  },
  release: async ({ locals }) => {
    await trpc(locals.auth).admissions.releaseAllDecisions();
    return "Released all decisions!";
  }
};
export {
  actions,
  load
};
