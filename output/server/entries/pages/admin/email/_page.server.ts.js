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
    settings: await trpc(locals.auth).settings.getAll()
  };
};
const actions = {
  emailByStatus: async ({ locals, request }) => {
    const formData = await request.formData();
    const status = formData.get("status");
    const subject = formData.get("subject");
    const emailBody = formData.get("emailBody");
    return trpc(locals.auth).users.sendEmailByStatus({ status, subject, emailBody });
  },
  settings: async ({ locals, request }) => {
    const formData = await request.formData();
    const submitTemplate = formData.get("submitTemplate");
    const acceptTemplate = formData.get("acceptTemplate");
    const rejectTemplate = formData.get("rejectTemplate");
    const waitlistTemplate = formData.get("waitlistTemplate");
    const confirmTemplate = formData.get("confirmTemplate");
    const declineTemplate = formData.get("declineTemplate");
    await trpc(locals.auth).settings.update({
      submitTemplate,
      acceptTemplate,
      rejectTemplate,
      waitlistTemplate,
      confirmTemplate,
      declineTemplate
    });
    return "Saved settings!";
  }
};
export {
  actions,
  load
};
