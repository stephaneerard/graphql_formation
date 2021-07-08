import books from './query/books';
import author from './book/author';
import bimObjects from './query/bimObjects';
import bimObjectName from './bimobject/name';
import bimObjectModels from './bimobject/models';

export default {
  Query: {
    books,
    bimObjects
  },
  BimObject: {
    name: bimObjectName,
    models: bimObjectModels
  },
  Book: {
    author,
  },
};
