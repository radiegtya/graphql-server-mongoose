import {makeExecutableSchema} from 'graphql-tools';
import Book from './book/schema';
import Author from './author/schema';
import resolvers from './resolvers';

const Query = `
  scalar JSON

  type Query {
    books(query: QueryInput): [Book]
    authors(query: QueryInput): [Author]
  }

  # Define criteria here
  input QueryInput {
    selector: JSON
    options: JSON
  }
`;

const Mutation = `
  type Mutation {

    # Book create
    createBook(doc: BookDocInput!): Book
    # Book update
    updateBook(query: QueryInput!, doc: BookDocInput!): Book

    # Author create
    createAuthor(doc: AuthorDocInput!): Author
    # Author update
    updateAuthor(query: QueryInput!, doc: AuthorDocInput!): Author
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, Book, Author],
  resolvers
})
