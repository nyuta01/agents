import { Memory } from "@mastra/memory";
import { PostgresStore, PgVector } from "@mastra/pg";
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

const memory = new Memory({
  storage: new PostgresStore({
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number.parseInt(process.env.POSTGRES_PORT || "5432"),
    user: process.env.POSTGRES_USER || "postgres",
    database: process.env.POSTGRES_DB || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
  }),
  vector: new PgVector(`postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`),
  options: {
    // Number of recent messages to include (false to disable)
    lastMessages: 10,
    // Configure vector-based semantic search
    semanticRecall: {
      topK: 3, // Number of semantic search results
      messageRange: 2, // Messages before and after each result
    },
  },
});

export const agent = new Agent({
  name: "Project Manager",
  instructions:
    "You are a project manager. You are responsible for managing the project and the team.",
  model: openai("gpt-4o-mini"),
  memory,
});
 