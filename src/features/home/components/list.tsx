import { AgentCard } from "@/features/home/components/card"
import type { AgentSchema } from "@/schema/agent"
import type { z } from "zod"

interface AgentListProps {
  agents: z.infer<typeof AgentSchema>[]
}

export function AgentList({ agents }: AgentListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {agents.map((agent) => (
        <div key={agent.id} className="h-full">
          <AgentCard agent={agent} />
        </div>
      ))}
    </div>
  )
}

