import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().trim().min(2).max(999),
  shortDescription: z.string().trim().min(2).max(999),
  longDescription: z.string().trim().min(2).max(999),
  swoRanking: z.number().default(0),
  flags: z.array(z.string()).optional(),
  // todo: add industries ?
});

export type Category = z.infer<typeof CategorySchema>;
