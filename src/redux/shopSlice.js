import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    shopItems: [],
    cart: []
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
        }
    }
})

export const {setShopItems, emptyShopItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity} = shopSlice.actions;

export default shopSlice.reducer;