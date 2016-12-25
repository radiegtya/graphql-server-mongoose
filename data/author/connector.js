import mongoose from 'mongoose';

const schema = {
  name: String
}

const Author = mongoose.model('Author', schema);

export default Author;
