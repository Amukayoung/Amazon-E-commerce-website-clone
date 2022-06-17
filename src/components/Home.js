import React from "react";
import "../components/Home.css";
import Product from "../components/Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="slider__img"
					src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
					alt=""
				/>
			</div>
			<div className="home__row1">
				<Product
					id="34527"
					tittle="The lean startup book: How Consultant Innovation Creates Radically Successful Businesses"
					price={25.5}
					rating={5}
					img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
				/>
				<Product
					id="29875"
					tittle="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
					price={189}
					rating={3}
					img="https://m.media-amazon.com/images/I/51cv0PY38oL._AC_SX569_.jpg"
				/>
			</div>
			<div className="home__row1">
				<Product
					id="34529"
					tittle="Samsung LC49RG90SSUXEN 49' Curved Gaming Monitor"
					price={199.9}
					rating={4}
					img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id="23456"
					tittle="Amazon Echo (3rd generation) | Smart speaker with Alexa,Charcoal Fabric"
					price={108.99}
					rating={3}
					img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?s300x400_retinanobilex2s.jpg"
				/>
				<Product
					id="98647"
					tittle="New Apple iPad Pro (12.9-inch,Wi-Fi, 128GB) - Silver (4th Generation)"
					price={402.9}
					rating={4}
					img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
				/>
			</div>
			<div className="home__row1">
				<Product
					id="98647"
					tittle="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra wide Dual WQHD 5120 X 1440"
					price={889.98}
					rating={4}
					img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
