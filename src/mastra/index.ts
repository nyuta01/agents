
import { Mastra } from '@mastra/core';
import { agent as chefAgent } from './agents/chef';
import { agent as stockAgent } from './agents/stock';
import { workflow as sequentialWorkflow } from './workflows/sequential';

export const mastra = new Mastra({
    agents: {
        chef: chefAgent,
        stock: stockAgent,
    },
    workflows: {
        sequential: sequentialWorkflow,
    },
});
        