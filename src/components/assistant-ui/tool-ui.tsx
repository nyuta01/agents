"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  LoaderCircle,
  OctagonX,
  TriangleAlert,
} from "lucide-react";
import type { FC, ReactNode } from "react";
import type { z } from "zod";
import { makeAssistantToolUI } from "@assistant-ui/react";
import type  { 
  inputSchema as PerplexityAiSearchInputSchema, 
  outputSchema as PerplexityAiSearchOutputSchema 
} from "@/mastra/tools/perplexityai-search";

type ToolStatus = "running" | "complete" | "incomplete" | "requires-action";

const statusIconMap: Record<ToolStatus, ReactNode> = {
  running: <LoaderCircle className="animate-spin text-indigo-500 size-4" />,
  complete: <CheckCircle className="text-emerald-500 size-4" />,
  "requires-action": <TriangleAlert className="text-amber-500 size-4" />,
  incomplete: <OctagonX className="text-rose-500 size-4" />,
};


type ToolArgs =
  | {
      toolName: "PERPLEXITYAI_SEARCH";
      displayName: "Perplexity AI Search";
      args: z.infer<typeof PerplexityAiSearchInputSchema>;
    }
    | {
        toolName: "SLACK_SENDS_A_MESSAGE_TO_A_SLACK_CHANNEL";
        displayName: "Slack Post Message";
        args: unknown;
      };


type ToolContainerProps = {
  status: ToolStatus;
} & ToolArgs;

const ToolContainer: FC<ToolContainerProps> = ({
  displayName,
  toolName,
  status,
  args,
}) => {
  const renderArgs = () => {
    if (!args) {
      return <p>No arguments to display.</p>;
    }

    switch (toolName) {
      case "PERPLEXITYAI_SEARCH":
        return <p>{args.query}</p>;
      default:
        return null;
    }
  };

  return (
    <Card className="mb-1.5 rounded-lg">
      <CardContent className="inline-flex items-center gap-2 p-3 text-sm">
        <span>{statusIconMap[status]}</span>
        <span className="font-semibold">{displayName}</span>
        <span className="text-muted-foreground">{renderArgs()}</span>
      </CardContent>
    </Card>
  );
};

const PerplexityAiSearchToolUI = makeAssistantToolUI<
  z.infer<typeof PerplexityAiSearchInputSchema>,
  z.infer<typeof PerplexityAiSearchOutputSchema>
>({
  toolName: "PERPLEXITYAI_SEARCH",
  render: ({ args, status, toolName }) => {
    return (
      <ToolContainer
        displayName="Perplexity AI Search"
        toolName={toolName as "PERPLEXITYAI_SEARCH"}
        status={status.type}
        args={args}
      />
    );
  },
});

const SlackPostMessageToolUI = makeAssistantToolUI<
  unknown,
  unknown
>({
  toolName: "SLACK_SENDS_A_MESSAGE_TO_A_SLACK_CHANNEL",
  render: ({ args, status, toolName }) => {
    return (
      <ToolContainer
        displayName="Slack Post Message"
        toolName={toolName as "SLACK_SENDS_A_MESSAGE_TO_A_SLACK_CHANNEL"}
        status={status.type}
        args={args}
      />
    );
  },
});


const ToolUIWrapper: FC = () => {
  return (
    <>
      <PerplexityAiSearchToolUI />
      <SlackPostMessageToolUI />
    </>
  );
};


export const ToolsByNameComponents = {
};

export default ToolUIWrapper;
