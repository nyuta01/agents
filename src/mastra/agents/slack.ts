import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

// https://github.com/mastra-ai/mastra/pull/2722
// import { VercelAIToolSet } from "composio-core";
// const toolset = new VercelAIToolSet({
//   apiKey: process.env.COMPOSIO_API_KEY,
// });
// const tools = await toolset.getTools({
//   apps: ["slack"],
// });

export const agent = new Agent({
  name: "Slack Agent",
  instructions:
    "You are a helpful assistant that provides current stock prices. When asked about a stock, use the stock price tool to fetch the stock price.",
  model: openai("gpt-4o-mini"),
});