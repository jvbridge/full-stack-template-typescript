import { AuthenticationError, UserInputError } from 'apollo-server-express';
import User from '../models';
import auth from '../util';

const resolvers = {
  Query: {
    me: async (parent: any, args: any, context: any) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    user: async (parent: any, args: { email: string }) => {
      const user = await User.find({ email: args.email });
      if (user) return user;
      throw new UserInputError('could not find user with that email');
    },
  },
  Mutation: {
    adduser: async (parent: any, args: { email: string; password: string }) => {
      return User.create({ args });
    },
  },
};

export default resolvers;
