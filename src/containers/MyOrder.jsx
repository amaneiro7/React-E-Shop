import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import { Link } from 'react-router-dom';


import flechita from "@icons/flechita.svg"

const MyOrder = () => {
	const { state } = useContext(AppContext);

const sumTotal = () => {
	const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
	const sum = state.cart.reduce(reducer, 0);
	return sum;
}


	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">Shopping cart</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem 
						indexValue={index}
						key={index}
						product={product} 
					/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>					
				</div>
				<Link to='/checkout'>
					<button className="primary-button">
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
