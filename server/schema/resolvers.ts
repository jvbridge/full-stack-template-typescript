import { AuthenticationError, UserInputError } from 'apollo-server-express';
import User from '../models/User';
import { signToken } from '../util/auth';
