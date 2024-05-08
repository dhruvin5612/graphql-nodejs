import { authorQueries, authorMutations } from './author';
import authorFields from './author/fields';
import { bookQueries, bookMutations } from './book';
import bookFields from './book/fields';
import { publisherQueries, publisherMutations } from './publisher';
import publisherFields from './publisher/fields';

const resolvers = {
  Query: {
    ...authorQueries,
    ...bookQueries,
    ...publisherQueries,
  },
  Mutation: {
    ...authorMutations,
    ...bookMutations,
    ...publisherMutations,
  },
  ...authorFields,
  ...bookFields,
  ...publisherFields,
};

export default resolvers;