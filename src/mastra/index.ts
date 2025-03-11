
import { Mastra } from '@mastra/core';
import { agent as chefAgent } from './agents/chef';
import { agent as stockAgent } from './agents/stock';
import { agent as projectManagerAgent } from './agents/project-manager';
import { workflow as sequentialWorkflow } from './workflows/sequential';

export const mastra = new Mastra({
    agents: {
        chef: chefAgent,
        stock: stockAgent,
        projectManager: projectManagerAgent,
    },
    workflows: {
        sequential: sequentialWorkflow,
    },
});
        