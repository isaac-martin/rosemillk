const initialState = {
    isCartOpen: false,
    checkout: {lineItems: []},
    products: [],
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
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        default:
            return state;
    }
}

export default roseMilkApp;
