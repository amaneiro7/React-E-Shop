import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';


const Checkout = () => {

	const { state } = useContext(AppContext)
	
	const sumTotal = () => {
		let sum = 0	
		state.cart.forEach(sumPrice => {
			sum += sumPrice.price			
		});	
		return sum
	};
	

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
						<p>${sumTotal()}</p>
					</div>
				</div>				
				{state.cart.map((product, index) => (
					<OrderItem 
						indexValue={index}
						key={index}
						product={product} 
					/>
				))}			
				
			</div>
		</div>
	);
}

export default Checkout;
