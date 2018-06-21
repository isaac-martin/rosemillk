// const playMix = payload => ({
//   type: 'PLAY_MIX',
//   payload
// });

const setCollection = payload => ({
  type: 'SET_COLLECTIONS',
  payload
});

const setProducts = payload => ({
  type: 'SET_PRODUCTS',
  payload
});

export default {
  setCollection,
  setProducts
};
