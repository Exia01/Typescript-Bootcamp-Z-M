import { promises as fs } from 'fs';

async function main() {
  const args: string[] = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: node index.ts <file_name> <search_string>');
    // Exit with an error code
    process.exit(1);
  }

  const fileName: string = args[0];
  const searchString: string = args[1];
  //   console.log(`Searching for "${searchString}" in "${fileName}"`);

  try {
    const textFileContent: string = await fs.readFile(fileName, 'utf8');
    const textFileContentLines: string[] = textFileContent.split('\n'); //splitting the content into lines
    const matchingLines: string[] = textFileContentLines.filter((line) =>
      line.includes(searchString)
    );
    console.log(
      `Found ${matchingLines.length} lines containing "${searchString}"`
    );
    if (matchingLines.length > 0) {
      console.log('Matching lines:');
      matchingLines.forEach((line) => console.log(line));
    }
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    process.exit(1);
  }
}

main();
