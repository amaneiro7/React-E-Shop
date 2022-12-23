import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '@styles/Header.scss';

import DesktopMenu from '@components/DesktopMenu'
import MobileMenu from '@components/MobileMenu'
import MyOrder from '@containers/MyOrder'
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';



const Header = () => {
	const { state } = useContext(AppContext)

    const [toggleDesktopMenu, setToggleDesktopMenu]  = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu]  = useState(false);
    const [toggleMyOrder, setToggleMyOrder]  = useState(false);
    

    const handleDesktopMenu = () => {
        setToggleDesktopMenu(!toggleDesktopMenu);
        setToggleMobileMenu(false);
        setToggleMyOrder(false);
    }
    
    const handleMobileMenu = () => {
        setToggleMobileMenu(!toggleMobileMenu);
        setToggleDesktopMenu(false);
        setToggleMyOrder(false);
    }
    const handleMyOrder = () => {
        setToggleMyOrder(!toggleMyOrder);
        setToggleDesktopMenu(false);
        setToggleMobileMenu(false);
    }

    
    return (
        <nav>            
            <img src={menu} alt="menu" className="menu" onClick={handleMobileMenu}/>
            <div className="navbar-left">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="navbar-logo" />
                </Link>
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleDesktopMenu}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={handleMyOrder}>
                    <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggleDesktopMenu && <DesktopMenu />}
            {toggleMobileMenu && <MobileMenu />}
            {toggleMyOrder && <MyOrder />}
        </nav>
        
    );
}

export default Header;