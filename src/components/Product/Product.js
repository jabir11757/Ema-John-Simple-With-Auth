import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    // const { handlerAddToCart } = props;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : $<span>{price}</span></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handlerAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;