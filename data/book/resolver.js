import { find, filter } from 'lodash';
import Book from './connector';
import Author from '../author/connector';
const GraphQLJSON = require('graphql-type-json');

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    books(root, {query}, context){
      const selector = (query && query.selector) || {};
      const options = (query && query.options) || {};

      const books = Book.find(selector);

      if(options){
        const {limit, skip, sort} = options;
        if(limit)
          books.limit(limit);

        if(skip)
          books.skip(skip);

        if(sort)
          books.sort(sort);
      }

      return books;
    }
  },
  Book: {
    author(book) {
      return Author.findById(book.authorId);
    },
  },
  Mutation : {
    createBook(_, {doc}){
      let book = new Book(doc);
      book.save();

      return book;
    },
    updateBook(_, {query, doc}){
      const book = Book.update(query.selector, {$set: doc});
      return book;
    }
  },
};

export default resolvers;
