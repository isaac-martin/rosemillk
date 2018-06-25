const setCollection = payload => ({
    type: 'SET_COLLECTIONS',
    payload
});

const setCollectionID = payload => ({
    type: 'SET_COLLECTION_ID',
    payload
});

const setProducts = payload => ({
    type: 'SET_PRODUCTS',
    payload
});

const setProductID = payload => ({
    type: 'SET_PRODUCT_ID',
    payload
});

const setClient = payload => ({
    type: 'SET_CLIENT',
    payload
});

export default {
    setCollection,
    setCollectionID,
    setProductID,
    setClient,
    setProducts
};
