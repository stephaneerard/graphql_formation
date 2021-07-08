import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs/index';
import resolvers from './resolvers/index';
import dataSources from './dataSources';
import sqlPlugin from './plugins/sql-plugin';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs, resolvers,
  tracing: true,
  dataSources: () => ({
    ...dataSources
  }),
  context: (ctx) => {
    return {
      ...ctx,
      lang: ctx.req.headers['accept-language']
    }
  },
  plugins: [sqlPlugin]
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
