import React from "react";
import "./Product.css";

function Product(props) {
	return (
		<div className="product__info">
			<div className="product__info__description">
				<p>{props.tittle}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{props.price}</strong>
				</p>
				<div className="product__rating">
					{Array(props.rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={props.img} alt="" />
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
