import { QuestionType } from "@prisma/client";
import { z } from "zod";
import { p as prisma } from "./db.js";
import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
function createContext(auth) {
  return auth;
}
const t = initTRPC.context().create({ transformer: SuperJSON });
const tTest = initTRPC.context().create({ transformer: SuperJSON });
function authenticate(roles) {
  return t.middleware(async ({ ctx, next }) => {
    const session = await ctx.validate();
    if (session === null) {
      throw new Error("Unauthorized");
    }
    if (roles !== void 0 && !hasAnyRole(session.user.roles, roles)) {
      throw new Error("Forbidden");
    }
    return next({
      ctx: { user: session.user }
    });
  });
}
function hasAnyRole(userRoles, allowedRoles) {
  return userRoles.some((userRole) => allowedRoles.includes(userRole));
}
const getQuestions = async () => {
  return await prisma.question.findMany({
    orderBy: [{ order: "asc" }]
  });
};
const questionsRouter = t.router({
  /**
   * Gets all questions.
   */
  get: t.procedure.query(async () => {
    return await getQuestions();
  }),
  /**
   * Creates a new question. User must be an admin.
   */
  create: t.procedure.use(authenticate(["ADMIN"])).input(z.nativeEnum(QuestionType)).mutation(async (req) => {
    const orders = (await getQuestions()).map((question) => question.order);
    const lastOrder = orders.length === 0 ? 0 : Math.max(...orders);
    return await prisma.question.create({
      data: {
        label: "",
        type: req.input,
        order: lastOrder + 1
      }
    });
  }),
  /**
   * Updates the given application questions. User must be an admin.
   */
  update: t.procedure.use(authenticate(["ADMIN"])).input(z.record(z.record(z.any()))).mutation(async (req) => {
    for (const questionId in req.input) {
      await prisma.question.update({
        where: { id: questionId },
        data: { ...req.input[questionId] }
      });
    }
  }),
  /**
   * Moves a question one position down. User must be an admin. Does
   * nothing if the question is already at the bottom.
   */
  moveDown: t.procedure.use(authenticate(["ADMIN"])).input(z.string()).mutation(async (req) => {
    const question = await prisma.question.findUniqueOrThrow({
      where: { id: req.input }
    });
    const nextQuestion = await prisma.question.findFirst({
      where: { order: { gt: question.order } },
      orderBy: [{ order: "asc" }]
    });
    if (nextQuestion === null) {
      return;
    }
    const clearX = prisma.question.update({
      where: { id: question.id },
      data: { order: -1 }
    });
    const setYtoX = prisma.question.update({
      where: { id: nextQuestion.id },
      data: { order: question.order }
    });
    const setXtoY = prisma.question.update({
      where: { order: -1 },
      data: { order: nextQuestion.order }
    });
    await prisma.$transaction([clearX, setYtoX, setXtoY]);
  }),
  /**
   * Moves a question one position up. User must be an admin. Does
   * nothing if the question is already at the top.
   */
  moveUp: t.procedure.use(authenticate(["ADMIN"])).input(z.string()).mutation(async (req) => {
    const question = await prisma.question.findUniqueOrThrow({
      where: { id: req.input }
    });
    const prevQuestion = await prisma.question.findFirst({
      where: { order: { lt: question.order } },
      orderBy: [{ order: "desc" }]
    });
    if (prevQuestion === null) {
      return;
    }
    const clearX = prisma.question.update({
      where: { id: question.id },
      data: { order: -1 }
    });
    const setYtoX = prisma.question.update({
      where: { id: prevQuestion.id },
      data: { order: question.order }
    });
    const setXtoY = prisma.question.update({
      where: { order: -1 },
      data: { order: prevQuestion.order }
    });
    await prisma.$transaction([clearX, setYtoX, setXtoY]);
  }),
  /**
   * Deletes a question. User must be an admin.
   */
  delete: t.procedure.use(authenticate(["ADMIN"])).input(z.string()).mutation(async (req) => {
    await prisma.question.deleteMany({ where: { id: req.input } });
  })
});
export {
  authenticate as a,
  tTest as b,
  createContext as c,
  getQuestions as g,
  questionsRouter as q,
  t
};
