import { find, filter } from 'lodash';
import Book from '../connectors/book';
import Author from '../connectors/author';

const resolvers = {
  Query: {
    books(){
      return Book.find({})
    }
  },
  Book: {
    author(book) {
      return Author.findById(book.authorId);
    },
  },
  Mutation : {
    createBook(_, obj){
      let book = new Book(obj);
      book.save();

      return book;
    }
  },
};

export default resolvers;
