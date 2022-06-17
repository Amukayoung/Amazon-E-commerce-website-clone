import React from "react";
import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
//import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
	return (
		<div className="header">
			<img
				className="header__logo"
				alt="Amazon-logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			/>
			<div className="header__search">
				<input className="header__searchinput" type="text" />
			</div>
			<div className="header__nav">
				<div className="header__nav__options">
					<span className="header__nav__options__line1">Hello,sign in</span>
					<span className="header__nav__options__line2">Accounts & Lists</span>
				</div>
				<div className="header__nav__options">
					<span className="header__nav__options__line1">Returns</span>
					<span className="header__nav__options__line2">& Order</span>
				</div>
				<div className="header__nav__options">
					<span className="header__nav__options__line1">Your</span>
					<span className="header__nav__options__line2">Prime</span>
				</div>
				<div className="basket__img">
					{/* <ShoppingCartIcon /> */}
					<span className="header__nav__options__line2 shop__items__count">
						0
					</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
