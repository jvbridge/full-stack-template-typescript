import * as express from 'express';
import * as path from 'path';
import { ApolloServer } from 'apollo-server-express';

// build our app to export
export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

// redirect all gets in production to be handled by react router
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

export const server = new ApolloServer({});
