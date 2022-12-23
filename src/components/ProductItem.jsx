import React, { useState, useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartimg from "@icons/bt_add_to_cart.svg"
import ProductDetail from '@containers/ProductDetail';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);
	const [toggleProductDetail, setToggleProductDetail] = useState(false);

	const handleProductDetail = () => {
		console.log('aqui estoy');
		setToggleProductDetail(!toggleProductDetail)
	}


	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem" onClick={handleProductDetail}>
			<img src={product.images[0]} alt={product.title}  />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartimg} alt="add to cart" />
				</figure>				
			</div>
		</div>
	);
}


export default ProductItem;
