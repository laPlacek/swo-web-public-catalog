import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string().length(13),
  industryId: z.string().length(13), // todo: maybe whole object?
  name: z.string().trim().min(2).max(999),
  shortDescription: z.string().trim().min(2).max(999),
  longDescription: z.string().trim().min(2).max(999),
  swoRanking: z.number().default(0),
  flags: z.array(z.string()).optional(),
});

export type Category = z.infer<typeof CategorySchema>;

export const normalizeName = (name: string) => {
  return name.trim().replace(/\s+/g, "-");
};
