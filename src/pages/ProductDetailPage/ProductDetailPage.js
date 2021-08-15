import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { firestore, storage } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import {FaShoppingCart} from 'react-icons/fa'
import { setProductDetail, emptyProductDetail, addToCart, incrementQuantity } from "../../redux/shopSlice";

import './styles.css';


const ProductDetailPage = () => {
    const [shortDesc, setShortDesc] = useState(true)
    const {productId} = useParams();
    const product = useSelector(state => state.shop.productDetail);
    const cart = useSelector(state => state.shop.cart);
    const dispatch = useDispatch();
    const productRef = firestore.collection('shop_items').doc(productId);

    useEffect(() => {
        productRef.get()
        .then(doc => {
            const {name, author, description, price, file_name} = doc.data();
            storage.ref(`/shop-items/${file_name}`).getDownloadURL()
                .then(url => {
                    dispatch(setProductDetail({id: doc.id, name, author, price, url, description}))
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
        return () => emptyProductDetail();
    })

    const add = item => {
        if(cart && cart.find(cartItem => cartItem.name === item.name)) {
            dispatch(incrementQuantity(item));
        } else {
            dispatch(addToCart(item));
        }   
    }

    return (
        <div className='product-detail-container'>
            <div className='product-image'>
                <img src={product.url} alt={product.name} />
            </div>
            <div className='product-description'>
                <h1>{product.name}</h1>
                <h3>{product.author}</h3>
                <p>{product && (shortDesc ? (product.description.substring(0, 100) + '...') : product.description)} <span className='desc-toggle' onClick={() => setShortDesc(!shortDesc)}>{shortDesc ? 'Read More' : 'Read Less'}</span></p>
                <h3>Price: ${product.price}</h3>
                <button className='cart-btn' onClick={() => add({
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    totalPrice: product.price
                })}>
                    Add to Cart 
                    <FaShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default ProductDetailPage
