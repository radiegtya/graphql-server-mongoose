const Book = `
  scalar JSON

  # Main Schema
  type Book {
    _id: String
    title: String
    author: Author
  }

  # Define Doc here
  input BookDocInput {
    _id: String
    title: String
    authorId: String
  }

  # Define criteria here
  input BookQueryInput {
    selector: JSON
    options: JSON
  }

`;

export default Book;
