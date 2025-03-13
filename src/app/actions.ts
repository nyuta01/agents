"use server"

import { mastra } from "@/mastra";
import { AgentSchema } from "@/schema/agent";
import type { z } from "zod";

export async function getAgents(): Promise<z.infer<typeof AgentSchema>[]> {
  const agents = Object.entries(mastra.getAgents()).map(([key, value]) => ({
    id: key,
    name: value.name,
    instructions: value.instructions,
  }));
  return agents.map((agent) => AgentSchema.parse(agent));
}