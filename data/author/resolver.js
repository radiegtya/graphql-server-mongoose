import Author from './connector';

const resolvers = {
  Query: {
    authors(root, {query}, context){
      const selector = (query && query.selector) || {};
      const options = (query && query.options) || {};

      const authors = Author.find(selector);

      if(options){
        const {limit, skip, sort} = options;
        if(limit)
          authors.limit(limit);

        if(skip)
          authors.skip(skip);

        if(sort)
          authors.sort(sort);
      }

      return authors;
    }
  },
  Mutation: {
    createAuthor(_, {doc}){
      let author = new Author(doc);
      author.save();

      return author;
    },
    updateAuthor(_, {query, doc}){
      const author = Author.update(query.selector, {$set: doc});
      return author;
    }
  }
}

export default resolvers;
