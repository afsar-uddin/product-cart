import React from 'react';
import { Link } from 'react-router-dom';
import tshirt from '../assets/tshirt.jpg'

const Products = () => {
    return (
        <div className='single-product'>
            <img src={tshirt} alt="t-shirt" />
            <h2>Awesome black T-shirt</h2>
            <Link className='link-btn' to="/detail">View Detail</Link>
        </div>
    );
};

export default Products;