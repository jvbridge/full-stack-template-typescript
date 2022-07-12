import { app, server } from './server';
import { DocumentNode } from 'graphql';
import { PORT } from './config/consts';

// the port we will be on will be 3001 or whatever the service we use has

const start = async (typedefs: DocumentNode, resolvers: any) => {
  await server.start();
};
