import React from 'react';


const DesktopMenu = () => {
	return (
		<div className="DesktopMenu">
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default DesktopMenu;
