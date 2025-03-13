import { z } from "zod";

export const AgentSchema = z.object({
  id: z.string(),
  name: z.string(),
  instructions: z.string(),
});