import { app, server } from './server';
import { DocumentNode } from 'graphql';
import { PORT } from './config/consts';
import typedefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
import db from './config/connection';

const start = async (typedefs: DocumentNode, resolvers: any) => {
  await server.start();

  // add the express server to the graphql server
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

start(typedefs, resolvers);
