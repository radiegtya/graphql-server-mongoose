import { merge } from 'lodash';
import bookResolvers from './book/resolver';
import authorResolvers from './author/resolver';
const GraphQLJSON = require('graphql-type-json');

const JSONresolver = {
  JSON: GraphQLJSON,
}

const resolvers = merge(JSONresolver, bookResolvers, authorResolvers);

export default resolvers;
