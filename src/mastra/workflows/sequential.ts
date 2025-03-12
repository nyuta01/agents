import { Step, Workflow } from "@mastra/core/workflows";
import { z } from "zod";

const stepOne = new Step({
	id: "stepOne",
	outputSchema: z.object({
		doubledValue: z.number(),
	}),
	execute: async ({ context }) => {
		const doubledValue = context.triggerData.inputValue * 2;
		return { doubledValue };
	},
});

const stepTwo = new Step({
	id: "stepTwo",
	execute: async ({ context }) => {
		if (context.steps.stepOne.status !== "success") {
			return { incrementedValue: 0 };
		}
		return {
			incrementedValue: context.steps.stepOne.output.doubledValue + 1,
		};
	},
});

const workflow = new Workflow({
	name: "sequential",
	triggerSchema: z.object({
		inputValue: z.number(),
	}),
});

workflow
	.step(stepOne)
	.then(stepTwo)
	.commit();

export { workflow };
