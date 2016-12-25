const Book = `

  # Main Schema
  type Book {
    _id: String
    title: String
    author: Author
  }

  # Define doc here
  input BookDocInput {
    _id: String
    title: String
    authorId: String
  }

`;

export default Book;
