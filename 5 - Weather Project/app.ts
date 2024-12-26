//CLI weather app 
async function main(): Promise<number> {
    // `process.argv` is a string array. Destructure it safely.
    const [tsNodeLocation, fileLocation, ...args]: string[] = process.argv;
  
    // Ensure we have at least two arguments
    if (tsNodeLocation == null || fileLocation == null) {
      throw new Error('Insufficient arguments. The script requires at least two arguments.');
    }
  
    // Example usage
    console.log('Node executable path:', tsNodeLocation);
    console.log('Script file path:', fileLocation);
    console.log('Additional arguments:', args);
  
    return 0;  // Return a number (you can replace this with your actual logic)
  }
  
  main().catch(console.error);  // Handle any errors during execution
  