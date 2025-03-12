import { mastra } from "@/mastra";
 
export const maxDuration = 30;
 
export async function POST(req: Request) {
	const { messages } = await req.json();
	const agent = mastra.getAgent("slackBot");

	const result = await agent.stream(messages, {
		context: [
			{
				role: "system",
				content: "You are a helpful assistant for Slack.",
			},
		],
		toolChoice: "auto",
	});

	return result.toDataStreamResponse();
}