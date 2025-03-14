
import { Mastra } from '@mastra/core';
import { agent as chef } from './agents/chef';
import { agent as stock } from './agents/stock';
import { agent as projectManager } from './agents/project-manager';
import { agent as webSearch } from './agents/web-search';
import { agent as slackBot } from './agents/slack-bot';
import { agent as scheduleManager } from './agents/schedule-manager';
import { workflow as sequential } from './workflows/sequential';

export const mastra = new Mastra({
    agents: {
        scheduleManager,
        chef,
        stock,
        projectManager,
        webSearch,
        slackBot,
    },
    workflows: {
        sequential,
    },
});
        