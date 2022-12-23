import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';


const Checkout = () => {

	const { state } = useContext(AppContext)
	
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	const current = new Date();
	const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{date}</span>
							<span>{state.cart.length}</span>
						</p>
						<p>${sumTotal}</p>
					</div>
				</div>
				
				{
					console.log(state.cart.product)
				/* {<OrderItem />} */}
			</div>
		</div>
	);
}

export default Checkout;
