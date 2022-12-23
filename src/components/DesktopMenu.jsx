import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/DesktopMenu.scss';


const DesktopMenu = () => {
	return (
		<div className="DesktopMenu">
			<ul>
				<li>
					<Link to="/Orders" className="title">My Orders</Link>
				</li>
				<li>
					<Link to="/account">My Account</Link>
				</li>
				<li>
					<Link to="/">Sign Out</Link>
				</li>
			</ul>
		</div>
	);
}

export default DesktopMenu;
