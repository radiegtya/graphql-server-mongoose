import { merge } from 'lodash';
import bookResolvers from './resolvers/book';
import authorResolvers from './resolvers/author';

const resolvers = merge(bookResolvers, authorResolvers);

export default resolvers;
