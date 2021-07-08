export default (_, { limit }) => [
  {
    id: 1,
    title: 'The Awakening',
  },
  {
    id: 2,
    title: 'City of Glass',
  },
].slice(0, limit);
