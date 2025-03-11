import { mastra } from '@/mastra';

async function main() {
  const agent = mastra.getAgent('chef');
  const response = await agent.generate([{ role: "user", content: 'I have some chicken and some vegetables. What can I cook?' }]);
  console.log(response.text);
}
 
main();