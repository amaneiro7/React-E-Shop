import React, {useState, useContext} from 'react';
import AppContext from '@context/AppContext';
import addToCartImg from "@icons/bt_add_to_cart.svg";
import '@styles/ProductInfo.scss';

const ProductInfo = (info) => {
	const { addToCart } = useContext(AppContext);
	const productDetail = info.info.detail
		
	const handleClick = item => {
		addToCart(item);
	}
	return (
		<>
			<img src={productDetail.images[0]} alt={productDetail.title} />
			<div className="ProductInfo">
				<p>${productDetail.price}</p>
				<p>{productDetail.title}</p>
				<p>{productDetail.description}</p>
				<button 
					className="primary-button add-to-cart-button" 
					onClick={() => handleClick(productDetail)}>
						<img src={addToCartImg} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
