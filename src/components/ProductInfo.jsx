import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductInfo.scss';
import addToCartimg from "@icons/bt_add_to_cart.svg";

const ProductInfo = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<>
			<img src={product.images[0]} alt={product.title} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button"
				onClick={() => handleClick(product)}>
					<img src={addToCartimg} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
