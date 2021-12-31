import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tshirt from '../assets/tshirt.jpg'
import SlickThub from '../SlickThub';

const ProductDetail = () => {
    const [incDec, setIncDec] = useState(1);
    const handleInc = () => {
        setIncDec(incDec + 1)
    }
    const handleDec = () => {
        if (incDec > 1) {
            setIncDec(incDec - 1)
        }
    }
    let productPrice = 89 * incDec;
    return (
        <div className='product-detail'>
            <div className='product-figure padding'>
                <SlickThub />
            </div>
            <div className='product-desc padding'>
                <h2>Awesome black T-shirt</h2>
                <p>Discover men's t-shirts and vests at ASOS. Shop from plain, printed, designer and long sleeve t-shirts and vests to longline and oversized styles with ASOS. Buy Tshirts for Men. Huge collection of men's tshirts at low offer price &amp; discounts at COD, Easy Returns &amp; Exchanges. Order Now.</p>
                <h3>Price: $ {productPrice}</h3>
                <div className='incDec'>
                    <button onClick={handleInc}>+</button>
                    <h4>{incDec}</h4>
                    <button onClick={handleDec}>-</button>
                </div>
                <div className='add2cart'> <Link className='link-btn' to="/cart">Add to cart</Link> </div>
            </div>
        </div >
    );
};

export default ProductDetail;