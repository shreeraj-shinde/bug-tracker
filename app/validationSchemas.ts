import { z } from "zod";

export const bugSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(65535),
});

export const patchBugSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(65535).optional(),
  assignedToUserId: z.string().min(1).max(255).optional().nullable(),
});
