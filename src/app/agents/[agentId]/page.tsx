
"use client"

import { Thread } from "@/components/assistant-ui/thread";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { useParams } from "next/navigation";
import { getAgent } from "./actions";
import { useState, useEffect } from "react";
import ToolUIWrapper from "@/components/assistant-ui/tool-ui";
import type { AgentSchema } from "@/schema/agent";
import type { z } from "zod";

export default function Page() {
  const { agentId } = useParams();
  if (!agentId) {
    return <div>Agent ID is required</div>;
  }

  const [agent, setAgent] = useState<z.infer<typeof AgentSchema> | null>(null);

  useEffect(() => {
    getAgent(agentId as string).then(setAgent);
  }, [agentId]);

  const runtime = useChatRuntime({
    api: "/api/chat",
    body: {
      agentId: agentId as string,
    },
  });

  if (!agent) {
    return <div>Loading...</div>;
  }
 
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="h-dvh gap-x-2 px-4 py-4">
        <Thread />
        <ToolUIWrapper />
      </div>
    </AssistantRuntimeProvider>
  );
}