import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    shopItems: [],
    cart: [],
    productDetail: {
        id: '',
        name: '', 
        author: '', 
        price: 0, 
        url: '', 
        description: ''
    }
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setShopItems: (state, action) => {
            state.shopItems.push(action.payload)
        },
        emptyShopItems: state => {
            state.shopItems = [];
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        incrementQuantity: (state, action) => {
            state.cart = state.cart.map(item => (item.name === action.payload.name) ? {...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price} : item)
        },
        decrementQuantity: (state, action) => {
            state.cart = state.cart.map(item => (item.name === action.payload.name) ? {...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price} : item)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.name !== action.payload);
        },
        setProductDetail: (state, action) => {
            state.productDetail = action.payload;
        },
        emptyProductDetail: state => {
            state.productDetail = {};
        }
    }
})

export const {setShopItems, emptyShopItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, setProductDetail, emptyProductDetail} = shopSlice.actions;

export default shopSlice.reducer;