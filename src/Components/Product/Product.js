import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    // cosnt {handleAddToCart, product} = props;
    const {img, name, seller, ratings, price} = product;

    
    return (
        <div className='product'>
            <img src={img} alt="Image" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)}  className='btn-cart'>
                <p className='para'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;