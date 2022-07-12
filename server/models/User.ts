import { Schema, model, Document, Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface UserDocument extends Document {
  email: string;
  password: string;
  isCorrectPassword: Function;
}

const userSchema = new Schema<UserDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

userSchema.pre('save', async function (next: Function) {
  // before making a new user or updating a user's password, ecrypt it
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// comparison method for getting the password
userSchema.methods.isCorrectPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// make the schema into a model
const User: Model<UserDocument> = model<UserDocument>('User', userSchema);

export default User;
