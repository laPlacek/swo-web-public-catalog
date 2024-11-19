import { z } from "zod";

export const IndustrySchema = z.object({
  name: z.string().trim().min(2).max(999),
});

export type Industry = z.infer<typeof IndustrySchema>;
