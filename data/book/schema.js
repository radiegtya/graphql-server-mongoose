const Book = `
  scalar JSON

  # Main Schema
  type Book {
    _id: String
    title: String
    author: Author
  }

  # Define criteria here
  input BookQueryInput {
    selector: JSON
    options: JSON
  }

  # Define doc here
  input BookDocInput {
    _id: String
    title: String
    authorId: String
  }

`;

export default Book;
