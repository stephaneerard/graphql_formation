export default (parent, args, context, info) => {
  switch (parent.id) {
    case 1:
      return {
        name: 'test',
        nbBooks: 1,
      };
    case 2:
      return {
        name: 'test2',
        nbBooks: 1,
      };
    default:
      break;
  }
};
