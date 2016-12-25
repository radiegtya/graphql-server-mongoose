import {makeExecutableSchema} from 'graphql-tools';
import Book from './book/schema';
import Author from './author/schema';
import resolvers from './resolvers';

const Query = `
  type Query {
    books(query: BookQueryInput): [Book]
    authors: [Author]
  }
`;

const Mutation = `
  type Mutation {

    # Book create
    createBook(doc: BookDocInput!): Book
    # Book update
    updateBook(query: BookQueryInput!, doc: BookDocInput!): Book

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
