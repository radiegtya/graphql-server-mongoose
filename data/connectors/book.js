import mongoose from 'mongoose';

const schema = {
  title: String,
  authorId: String
}

const Book = mongoose.model('Book', schema);

export default Book;
