import React from 'react';
import {FaTrash} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/shopSlice';
import { useDispatch } from 'react-redux';
import './styles.css';

const ShoppingCart = () => {
    const cart = useSelector(state => state.shop.cart);
    const dispatch = useDispatch();
    const cartTotal = cart ? cart.reduce((acc, cur) => acc + cur.totalPrice, 0) : 0;
    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            {cart && cart.map(item => (
                <div className='cart-item'>
                    <h3>{item.name}</h3>
                    <div className='cart-quantity'>
                        <button className='cart-btn' onClick={() => dispatch(decrementQuantity(item))} disabled={item.quantity <= 1}>-</button>
                        <span>{item.quantity}</span>
                        <button className='cart-btn' onClick={() => dispatch(incrementQuantity(item))}>+</button>
                    </div>
                    <h3>${item.totalPrice}</h3>
                    <div className='cart-remove' onClick={() => dispatch(removeFromCart(item.name))}>
                        <FaTrash />
                    </div>
                </div>
            ))}
            <div className='cart-summary'>
                <div>
                    <h3>Total</h3>
                    <h3>${cartTotal}</h3>
                </div>
                <button className='cart-btn'>Check Out</button>
            </div>  
        </div>
    )
}

export default ShoppingCart
