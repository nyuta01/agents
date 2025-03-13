"use server"

import { mastra } from "@/mastra";
import { AgentSchema } from "@/schema/agent";
import type { z } from "zod";

export async function getAgent(agentId: string): Promise<z.infer<typeof AgentSchema> | null> {
  if (!agentId) {
    return null;
  }
  const agents = await mastra.getAgents();
  const agent = agents[agentId as keyof typeof agents];
  if (!agent) {
    throw new Error("Agent not found");
  }
  return AgentSchema.parse({
    id: agentId,
    name: agent.name,
    instructions: agent.instructions,
  });
}
