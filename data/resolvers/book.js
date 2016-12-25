import { find, filter } from 'lodash';
import Book from '../connectors/book';
import Author from '../connectors/author';
const GraphQLJSON = require('graphql-type-json');

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    books(root, {query}, context){
      const {selector, options} = query;
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
    updateBook(_, {selector, doc}){
      const book = Book.update(selector, {$set: doc});
      return book;
    }
  },
};

export default resolvers;
