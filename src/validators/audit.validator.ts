import { z } from "zod";

export const auditSchema = z.object({
  url: z.string().url("Please provide a valid URL"),
});

export type AuditRequest = z.infer<typeof auditSchema>;