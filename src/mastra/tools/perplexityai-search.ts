import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { OpenAIToolSet } from "composio-core";
import { generateText } from "ai";
import { OpenAI } from "openai";

export const inputSchema = z.object({
	query: z.string(),
});

export const outputSchema = z.object({
	result: z.any(),
});

export const tool = createTool({
	id: "PerplexityAI Search",
	inputSchema: inputSchema,
	outputSchema: outputSchema,
	description: "Search the web for information",
	execute: async ({ context: { query } }) => {
		const toolset = new OpenAIToolSet({
			apiKey: process.env.COMPOSIO_API_KEY,
		});
		const tools = await toolset.getTools({
			actions: ["PERPLEXITYAI_PERPLEXITY_AI_SEARCH"],
		});

		const client = new OpenAI();
		const completion = await client.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{
					role: "user",
					content: query,
				},
			],
			tools: tools,
			tool_choice: "auto",
		});
		const result = await toolset.handleToolCall(completion);

		return {
			result: result,
		};
	},
});
