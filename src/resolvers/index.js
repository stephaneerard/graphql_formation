import books from './query/books';
import author from './book/author';
import bimObjects from './query/bimObjects';
import bimObjectName from './bimobject/name';

export default {
  Query: {
    books,
    bimObjects
  },
  BimObject: {
    name: bimObjectName
  },
  Book: {
    author,
  },
};
