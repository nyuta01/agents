import { mastra } from '@/mastra';

async function main() {
  console.log('Starting Mastra...');

  console.log('Getting chef agent...');
  const chefAgent = mastra.getAgent('chef');
  const chefResponse = await chefAgent.generate([{ role: "user", content: 'I have some chicken and some vegetables. What can I cook?' }]);
  console.log(chefResponse.text);

  console.log('Getting stock agent...');
  const stockAgent = mastra.getAgent('stock');
  const stockResponse = await stockAgent.generate([{ role: "user", content: 'What is the stock price of Apple?' }]);
  console.log(stockResponse.text);

  console.log('Getting sequential workflow...');
  const sequentialWorkflow = mastra.getWorkflow('sequential');
  const sequentialRun = await sequentialWorkflow.createRun();
  const sequentialResponse = await sequentialRun.start({ triggerData: { inputValue: 1 } });
  console.log(sequentialResponse.results);
}
 
main();