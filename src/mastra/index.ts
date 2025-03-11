
import { Mastra } from '@mastra/core';
import { agent as chefAgent } from './agents/chef';
import { agent as stockAgent } from './agents/stock';

export const mastra = new Mastra({
    agents: {
        chef: chefAgent,
        stock: stockAgent,
    },
});
        