import { app, server } from './server';
import { DocumentNode } from 'graphql';

// the port we will be on will be 3001 or whatever the service we use has
const PORT = process.env.PORT || 3001;

const start = async (typedefs: DocumentNode, resolvers: any) => {
  await server.start();
};
