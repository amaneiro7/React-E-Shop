import React, { useState, useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import ProductDetail from '@containers/ProductDetail';
import addToCartimg from "@icons/bt_add_to_cart.svg";

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);		
	const [ toggleProductDetail, setToggleDetail] = useState(false);
	
	const handleClick = item => {
		addToCart(item);
	}
	
	const handleDetail = () => {
		setToggleDetail(!toggleProductDetail);
	};

	return (
		<>
		{toggleProductDetail && <ProductDetail 
			detail={product}			

		/>}
			<div className="ProductItem">
				<img src={product.images[0]} alt={product.title} onClick={() => handleDetail(product)}/>
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
		</>
	);
};

export default ProductItem;
