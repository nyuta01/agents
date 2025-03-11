import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
 
import { tool as PERPLEXITYAI_SEARCH } from "@/mastra/tools/perplexityai-search";
 
export const agent = new Agent({
  name: "Web Search Agent",
  instructions: "You are a helpful assistant that provides web search results.",
  model: openai("gpt-4o-mini"),
  tools: {
    PERPLEXITYAI_SEARCH,
  },
});