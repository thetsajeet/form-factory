import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../init";
import { formRouter } from "./form";

export const appRouter = createTRPCRouter({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  forms: formRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
