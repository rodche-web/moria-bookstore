import {FaShoppingCart} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { addToCart, incrementQuantity } from '../../redux/shopSlice';

import './styles.css'

const ShopItem = ({item}) => {
    const {id, name, author, price, url} = item;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.shop.cart);

    const add = item => {
        if(cart && cart.find(cartItem => cartItem.name === item.name)) {
            dispatch(incrementQuantity(item));
        } else {
            dispatch(addToCart(item));
        }   
    }

    return (
        <div className='shop-item'>
            <img src={url} alt={name} />
            <div>
                <NavLink className='shop-item-navlink' to={`/products/${id}`}>
                    <h3>{name}</h3>
                </NavLink>
                <p>{author}</p>
                <p>${price}</p>
            </div>
            <div>
                <button className='cart-btn' onClick={() => add({
                    name,
                    price,
                    quantity: 1,
                    totalPrice: price
                })}>
                    Add to Cart 
                    <FaShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default ShopItem
