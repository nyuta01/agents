import { Agent } from "@mastra/core/agent";
import { ComposioIntegration } from '@mastra/composio';
import { openai } from "@ai-sdk/openai";


const composio = new ComposioIntegration({
  config: {
    API_KEY: process.env.COMPOSIO_API_KEY || "",
    entityId: 'default',
    connectedAccountId: 'bbf123e3-c182-411d-8efc-f33199b80a56',
  },
});
const tools = await composio.getTools({
  // apps: ["slack"],
  actions: [
    "SLACK_SENDS_A_MESSAGE_TO_A_SLACK_CHANNEL",
    "SLACK_SEARCH_FOR_MESSAGES_WITH_QUERY",
    "SLACK_FETCH_CONVERSATION_HISTORY",
    "SLACK_LIST_ALL_SLACK_TEAM_CHANNELS_WITH_VARIOUS_FILTERS",
    "SLACK_CREATE_CHANNEL_BASED_CONVERSATION",
    "SLACK_RETRIEVE_DETAILED_USER_INFORMATION",
    "SLACK_RETRIEVE_CALL_INFORMATION",
  ],
});

export const agent = new Agent({
  name: "Slack Agent",
  instructions: `
  あなたはSlackアシスタントです。
  与えられたToolを用いて可能な限り全ての依頼をこなして下さい
  `,
  model: openai("gpt-4o-mini"),
  tools: tools,
});