///Examples of iterators
let oneToFifteenArray: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

// Using a for loop to iterate over the array

for (let i = 0; i < oneToFifteenArray.length; i++) {
  console.log(oneToFifteenArray[i]);
}

// Using a for-of loop to iterate over the array

for (let num of oneToFifteenArray) {
  console.log(num);
  // num is a copy of the value in the array
}

// Using a forEach method to iterate over the array

oneToFifteenArray.forEach((num) => {
  console.log(num);
  // num is a copy of the value in the array
});

// Iteration over objects
const deskRoomStats = {
  chairs: 10,
  tables: 5,
  sofas: 3,
};

type deskRoomStatsKeys = keyof typeof deskRoomStats;

for (let key in deskRoomStats) {
  if (deskRoomStats.hasOwnProperty(key)) {
    const typedKey = key as deskRoomStatsKeys;
    console.log(`${key}: ${deskRoomStats[typedKey]}`);
  }
}

for (const [key, value] of Object.entries(deskRoomStats)) {
  console.log(`${key}: ${value}`);
  //this is the most elegant and efficient way to iterate over object properties since there is no built-in way to iterate over object properties in TypeScript
  //It also preserves the order of properties
  //key and value are copies of the values in the object
  //Object.entries returns an array of key-value pairs
}
