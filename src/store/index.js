const initialState = {
  isCartOpen: false,
  products: [],
  product: [],
  client: [],
  collections: [],
  collectionID: '',
  shop: {}
};

function roseMilkApp(state = initialState, action) {
  const {type, payload} = action;
  switch (action.type) {
    case 'SET_COLLECTIONS':
      return {
        ...state,
        collections: action.payload
      };
    case 'SET_COLLECTION_ID':
      return {
        ...state,
        collectionID: action.payload
      };
    case 'SET_CLIENT':
      return {
        ...state,
        client: action.payload
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
}

export default roseMilkApp;
