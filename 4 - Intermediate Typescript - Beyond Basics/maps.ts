//Example of maps, uses and best practices
const enlistedCountries = new Map<string, string[]>([
  ['USA', ['Washington D.C.', 'New York City', 'Los Angeles']],
  ['Canada', ['Ottawa', 'Quebec', 'Montreal']],
  ['UK', ['London', 'Birmingham', 'Manchester']],
  ['France', ['Paris', 'Marseille', 'Lille']],
  ['Germany', ['Berlin', 'Munich', 'Frankfurt']],
]);

// Example usage
console.log(enlistedCountries.get('USA')); // ['Washington D.C.', 'New York City', 'Los Angeles']
console.log(enlistedCountries.get('Canada')); // ['Ottawa', 'Quebec', 'Montreal']

// Iterating over Map entries (key-value pairs)
for (const [country, cities] of enlistedCountries) {
  console.log(`${country}: ${cities.join(', ')}`);
}

//maps objects and methods
type userTestName = string
type userScoreNumber = number
const testScores = new Map<userTestName, userScoreNumber>()

testScores.set('John Doe', 95)


// Check if a key exists

console.log(testScores.has('John Doe')) // true
console.log(testScores.has('Jane Doe')) // false

// Remove a key-value pair

testScores.delete('John Doe')

console.log(testScores.has('John Doe')) // false

// Clear all key-value pairs

testScores.clear()

console.log(testScores.size) // 0

// Maps in TypeScript best practices
