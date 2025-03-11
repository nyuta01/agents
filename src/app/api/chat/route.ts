import { mastra } from "@/mastra";
 
export const maxDuration = 30;
 
export async function POST(req: Request) {
	const { messages } = await req.json();
	const agent = mastra.getAgent("webSearch");

	const result = await agent.stream(messages, {
		context: [
			{
				role: "system",
				content: "You are a helpful assistant that can search the web for information.",
			},
		],
		toolChoice: "auto",
	});

	// @ts-ignore
	return result.toDataStreamResponse();
}