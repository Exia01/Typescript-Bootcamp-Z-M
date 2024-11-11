//example of tuples in TypeScript
type BookTitle = string;
type BookPublicationYear = number;

type BookType = 'fiction' | 'non-fiction';

type BookTypeDeclaration = [BookTitle, BookPublicationYear, BookType];
const bookInstanceExample: BookTypeDeclaration = [
  'To Kill a Mockingbird',
  1960,
  'fiction',
];

// Modifying the tuple values
bookInstanceExample[0] = '1984'; // Changing the title
bookInstanceExample[1] = 1949;   // Changing the publication year
bookInstanceExample[2] = 'fiction'; // Changing the book type
