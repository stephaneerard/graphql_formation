import books from './query/books';
import author from './book/author';
import order from './book/order';
import relatedAuthors from './author/relatedAuthors';

export default {
  Query: {
    books,
  },
  Book: {
    author,
    order,
  },
  Author: {
    relatedAuthors,
  },
};
