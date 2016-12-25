import Author from './connector';

const resolvers = {
  Query: {
    authors(){
      return authors;
    }
  },
  Mutation: {
    createAuthor(_, obj){
      let author = new Author(obj);
      author.save();

      return author;
    }
  }
}

export default resolvers;
