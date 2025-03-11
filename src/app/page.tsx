"use client"

import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Thread } from "@/components/assistant-ui/thread";
import ToolUIWrapper from "@/components/assistant-ui/tool-ui";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";

export default function Page() {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });
 
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid h-dvh grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
        <ThreadList />
        <Thread />
        <ToolUIWrapper />
      </div>
    </AssistantRuntimeProvider>
  );
}