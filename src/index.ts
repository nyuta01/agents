import { mastra } from '@/mastra';

async function main() {
  const chefAgent = mastra.getAgent('chef');
  const chefResponse = await chefAgent.generate([{ role: "user", content: 'I have some chicken and some vegetables. What can I cook?' }]);
  console.log(chefResponse.text);

  const stockAgent = mastra.getAgent('stock');
  const stockResponse = await stockAgent.generate([{ role: "user", content: 'What is the stock price of Apple?' }]);
  console.log(stockResponse.text);
}
 
main();