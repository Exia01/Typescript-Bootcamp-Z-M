type linkType = {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};
const linksArrayExample: linkType[] = [
  {
    id: 1,
    url: 'https://www.typescriptlang.org/',
    title: 'TypeScript Documentation',
    description: 'Learn TypeScript',
    category: 'Programming Language',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-02',
  },
  {
    id: 2,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math',
    title: 'MDN Math Reference',
    description: 'JavaScript Math Functions',
    category: 'JavaScript',
    createdAt: '2022-01-03',
    updatedAt: '2022-01-04',
  },
];
//extracting one link from the array
const extractedLink = linksArrayExample[0];

// const { id, url, title, description, category, createdAt, updatedAt } = extractedLink;

// console.log(`ID: ${id}`);