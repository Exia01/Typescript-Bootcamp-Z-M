import { greetAndListOutCommands, handleCommand } from './helperFuncs';
// Promisify the question method

//run application Todo application and ask for user input
const runApplication = async () => {
  console.log('Starting Todo application...');
  // Get all command-line arguments as a single string
  const fullInput = process.argv.slice(2).join(' ');
  console.log('Full input:', fullInput);

  // Find the index of the first colon
  const colonIndex = fullInput.indexOf(':');

  if (colonIndex === -1) {
    console.error('Invalid input format. Use "command: payload"');
    process.exit(1);
  }

  // Split the input at the first colon
  const commandString = fullInput.slice(0, colonIndex).trim();
  const payloadString = fullInput.slice(colonIndex + 1).trim();

  console.log('Parsed command:', commandString);
  console.log('Parsed payload:', payloadString);

  try {
    const result = await handleCommand(commandString, payloadString);
    console.log('Command result:', result);
  } catch (error) {
    console.error('Error handling command:', error);
  }

  // Keep the application running
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
runApplication().catch((error) => {
  console.error('Unhandled error in runApplication:', error);
  process.exit(1);
});
