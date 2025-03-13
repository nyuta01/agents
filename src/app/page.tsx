"use client"

import { useEffect, useState } from "react";
import { getAgents } from "./actions";
import { AgentList } from "@/features/home/components/list";
import { PageHeader } from "@/features/home/components/header";
import type { AgentSchema } from "@/schema/agent";
import type { z } from "zod";

export default function Page() {

  const [agents, setAgents] = useState<z.infer<typeof AgentSchema>[]>([]);

  useEffect(() => {
    getAgents().then(setAgents);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Agents" description="Agents are the core of our platform. They are the ones that will help you get the most out of your data." />
      <AgentList agents={agents} />
    </div>
  )
}