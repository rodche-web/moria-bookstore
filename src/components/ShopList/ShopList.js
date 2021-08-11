import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {firestore, storage} from '../../firebase/config';
import ShopItem from '../ShopItem/ShopItem';
import {setShopItems, emptyShopItems} from '../../redux/shopSlice';

import './styles.css';

const ShopList = () => {
    const shopItems = useSelector(state => state.shop.shopItems);
    const dispatch = useDispatch();
    const itemsRef = firestore.collection('shop_items')

    useEffect(() => {
        itemsRef.get()
        .then(snap => {
            snap.forEach(doc => {
                const {name, author, price, file_name} = doc.data();
                storage.ref(`/shop-items/${file_name}`).getDownloadURL()
                .then(url => {
                    dispatch(setShopItems({id: doc.id, name, author, price, url}))
                })
                .catch(err => console.log(err));
            });
        })
        .catch(err => console.log(err));
        return () => dispatch(emptyShopItems());
    },[])

    if (!shopItems) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='shop-list'>
            {shopItems && shopItems.map(item => <ShopItem key={item.id} item={item} />)}
        </div>
    )
}

export default ShopList
