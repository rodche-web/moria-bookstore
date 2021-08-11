import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.css';

const Header = () => {
    const cart = useSelector(state => state.shop.cart);
    return (
        <header>
            <div>
                <h1>Moria Bookstore</h1>
            </div>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to='/about'>About</Link></li>
                    <li className='nav-item'>
                        <Link to='/cart'><FaShoppingCart /></Link>
                        {(cart.length > 0) && <span className='cart-badge'>{cart.length}</span>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
