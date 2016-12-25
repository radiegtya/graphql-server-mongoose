import { merge } from 'lodash';
import bookResolvers from './book/resolver';
import authorResolvers from './author/resolver';

const resolvers = merge(bookResolvers, authorResolvers);

export default resolvers;
