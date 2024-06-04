import { a as authenticate } from "../../../../chunks/authenticate.js";
import { t as trpc } from "../../../../chunks/router.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(utc);
dayjs.extend(timezone);
const load = async ({ locals }) => {
  await authenticate(locals.auth, ["ADMIN"]);
  return {
    homepageText: (await trpc(locals.auth).settings.getAll()).homepageText
  };
};
const actions = {
  settings: async ({ locals, request }) => {
    const homepageText = (await request.formData()).get("homepageText");
    await trpc(locals.auth).settings.update({
      homepageText
    });
    return "Saved settings!";
  },
  createEvent: async ({ locals, request }) => {
    const timezone2 = (await trpc(locals.auth).settings.getPublic()).timezone;
    const formData = await request.formData();
    const fixedStartTime = dayjs.tz(formData.get("start"), timezone2).toDate();
    const fixedEndTime = dayjs.tz(formData.get("end"), timezone2).toDate();
    await trpc(locals.auth).events.create({
      name: formData.get("name"),
      description: formData.get("description"),
      start: fixedStartTime,
      end: fixedEndTime,
      location: formData.get("location"),
      type: formData.get("type")
    });
    return "Created event!";
  },
  createFAQ: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).infoBox.create({
      title: formData.get("question"),
      response: formData.get("answer"),
      category: "FAQ"
    });
    return "Created FAQ!";
  },
  createChallenge: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).infoBox.create({
      title: formData.get("category"),
      response: formData.get("challenge"),
      category: "CHALLENGE"
    });
    return "Created challenge!";
  },
  deleteAll: async ({ locals, request }) => {
    const deleteAllValue = (await request.formData()).get("deleteAll");
    if (deleteAllValue === "events") {
      await trpc(locals.auth).events.deleteAll();
      return "Deleted all Events!";
    } else if (deleteAllValue === "FAQs") {
      await trpc(locals.auth).infoBox.deleteAllOfCategory("FAQ");
      return "Deleted all FAQ!";
    } else if (deleteAllValue === "challenges") {
      await trpc(locals.auth).infoBox.deleteAllOfCategory("CHALLENGE");
      return "Deleted all challenges!";
    } else {
      return "Invalid element to delete";
    }
  }
};
export {
  actions,
  load
};
