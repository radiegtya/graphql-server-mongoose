import {makeExecutableSchema} from 'graphql-tools';
import Book from './schemas/book';
import Author from './schemas/author';
import resolvers from './resolvers';

const Query = `
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const Mutation = `
  type Mutation {
    createBook(title: String, authorId: String): Book
    createAuthor(name: String): Author
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
