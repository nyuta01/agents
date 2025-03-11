
import { Mastra } from '@mastra/core';
import { agent as chefAgent } from './agents/chef';

export const mastra = new Mastra({
    agents: {
        chef: chefAgent,
    },
});
        