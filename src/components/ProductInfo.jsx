import React, {useState, useContext} from 'react';
import AppContext from '@context/AppContext';
import addToCartImg from "@icons/bt_add_to_cart.svg";
import '@styles/ProductInfo.scss';

const ProductInfo = (product) => {
	const { addToCart } = useContext(AppContext);
	console.log(product.product);

	const handleClick = item => {
		addToCart(item);
	}
	return (
		<>
			<img src={product.product.images[0]} alt={product.product.title} />
			<div className="ProductInfo">
				<p>${product.product.price}</p>
				<p>{product.product.title}</p>
				<p>{product.product.description}</p>
				<button 
					className="primary-button add-to-cart-button" 
					onClick={() => handleClick(product.product)}>
						<img src={addToCartImg} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
