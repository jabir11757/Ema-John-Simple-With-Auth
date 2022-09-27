import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Kuchur Muchur</h1>
            <p>Selected item :  {cart.length}</p>
        </div>
    );
};

export default Cart;