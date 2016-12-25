import { find, filter } from 'lodash';
import { pubsub } from './subscriptions';

const authors = [
  { _id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { _id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

const books = [
  { _id: 1, title: 'book1'},
  { _id: 2, title: 'book2'},
];

const posts = [
  { _id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { _id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
  { _id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
];

const resolveFunctions = {
  Query: {
    posts() {
      return posts;
    },
    books(){
      return books;
    }
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      pubsub.publish('postUpvoted', post);
      return post;
    },
  },
  Subscription: {
    postUpvoted(post) {
      return post;
    },
  },
  Author: {
    posts(author) {
      return filter(posts, { authorId: author.id });
    },
  },
  Post: {
    author(post) {
      return find(authors, { id: post.authorId });
    },
  },
};

export default resolveFunctions;
