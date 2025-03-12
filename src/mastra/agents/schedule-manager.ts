import { Agent } from "@mastra/core/agent";
import { ComposioIntegration } from '@mastra/composio';
import { openai } from "@ai-sdk/openai";
import instructions from "./instructions/schedule-manager";

const composio = new ComposioIntegration({
  config: {
    API_KEY: process.env.COMPOSIO_API_KEY || "",
    entityId: 'default',
    connectedAccountId: '1b8cd666-1092-40e5-8f55-dc8294c8c230',
  },
});
const tools = await composio.getTools({
  actions: [
    "GOOGLECALENDAR_FIND_EVENT",
    "GOOGLECALENDAR_CREATE_EVENT",
    "GOOGLECALENDAR_FIND_FREE_SLOTS",
    "GOOGLECALENDAR_GET_CURRENT_DATE_TIME",
    "GOOGLECALENDAR_LIST_CALENDARS",
    "GOOGLECALENDAR_GET_CALENDAR",
    "GOOGLECALENDAR_UPDATE_EVENT",
    "GOOGLECALENDAR_QUICK_ADD",
    "GOOGLECALENDAR_DELETE_EVENT",
    "GOOGLECALENDAR_PATCH_CALENDAR",
    "GOOGLECALENDAR_DUPLICATE_CALENDAR",
    "GOOGLECALENDAR_REMOVE_ATTENDEE",
  ],
});

export const agent = new Agent({
  name: "Schedule Manager",
  instructions: instructions,
  model: openai("gpt-4o-mini"),
  tools: tools,
});