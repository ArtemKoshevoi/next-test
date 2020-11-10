import { ApolloServer } from 'apollo-server-micro';
import { db } from '';
import { schema } from '';

const apolloServer = new ApolloServer({ schema, context: { db } });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
