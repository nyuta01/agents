import { Card } from "@/components/ui/card"
import type { AgentSchema } from "@/schema/agent"
import Link from "next/link"
import type { z } from "zod"

interface AgentCardProps {
  agent: z.infer<typeof AgentSchema>
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Link href={`/agents/${agent.id}`} className="block h-full">
      <Card
        className="border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer h-full flex flex-col"
      >
        <div className="p-4 flex flex-col h-full">
          <h3 className="font-medium mb-2">{agent.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{agent.instructions}</p>
        </div>
      </Card>
    </Link>
  )
}

