import { createTRPCRouter as router, publicProcedure } from "../init";
import { z } from "zod";

const forms: { [key: string]: unknown } = {
  "44dead93-81ff-4173-923b-22396249aa93": {
    formElements: [
      {
        id: "a67935bf-7d38-4a1a-883d-55822b892680",
        label: "text-1",
        name: "text-1",
        type: "text",
        placeholder: "",
        options: [],
      },
    ],
    formMetadata: { formTitle: "My Form", formDescription: "" },
  },
};

export const formRouter = router({
  get: publicProcedure
    .input(z.object({ formId: z.string() }))
    .query(async ({ input }) => {
      const { formId } = input;

      // query db for formId
      if (!forms[formId]) return null;

      return forms[formId];
    }),
  create: publicProcedure
    .input(
      z.object({
        formElements: z.any(),
        formMetadata: z.object({
          title: z.string().min(1),
          description: z.string().optional(),
        }),
        formId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      // save to db
      const { formId, formMetadata, formElements } = input;
      if (Object.keys(forms).filter((k) => k === formId))
        return { error: "already exists" };

      return {};
    }),
});
