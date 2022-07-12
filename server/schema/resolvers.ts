import { AuthenticationError, UserInputError } from 'apollo-server-express';
import User from '../models';
import auth from '../util';

const resolvers = {
  Query: {
    me: async (parent: any, args: any, context: any) => {
      if (context.user) {
        return User.findById(context.user._id)
          .populate('checklists')
          .populate('todo');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

export default resolvers;
