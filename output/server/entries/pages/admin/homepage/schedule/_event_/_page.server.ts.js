import { a as authenticate } from "../../../../../../chunks/authenticate.js";
import { t as trpc } from "../../../../../../chunks/router.js";
import { e as error, r as redirect } from "../../../../../../chunks/index.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(utc);
dayjs.extend(timezone);
const load = async ({ locals, params }) => {
  await authenticate(locals.auth, ["ADMIN"]);
  if (Number.isNaN(Number(params.event))) {
    throw error(404, "Event not found");
  }
  const event = await trpc(locals.auth).events.get(Number(params.event));
  const settings = await trpc(locals.auth).settings.getPublic();
  if (event !== null) {
    return {
      event,
      timezone: settings.timezone
    };
  }
  throw error(404, "Event not found");
};
const actions = {
  edit: async ({ locals, request }) => {
    const timezone2 = (await trpc(locals.auth).settings.getPublic()).timezone;
    const formData = await request.formData();
    const fixedStartTime = dayjs.tz(formData.get("start"), timezone2).toDate();
    const fixedEndTime = dayjs.tz(formData.get("end"), timezone2).toDate();
    await trpc(locals.auth).events.update({
      id: Number(formData.get("id")),
      name: formData.get("name"),
      description: formData.get("description"),
      start: fixedStartTime,
      end: fixedEndTime,
      location: formData.get("location"),
      type: formData.get("type")
    });
    return "Saved event!";
  },
  delete: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).events.delete(Number(formData.get("id")));
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
