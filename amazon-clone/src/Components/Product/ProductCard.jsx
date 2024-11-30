import React from "react";
import Rating from "@mui/material/Rating";
import Currencyformat from "../Currencyformat/Currencyformat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ product, flex, renderDesc }) {
	const { image, title, id, rating, price, description } = product;
	// console.log(product);
	return (
		<div
			className={`${classes.card_container} ${
				flex ? classes.product_flexed : ""
			}`}
		>
			<Link to={`/products/${id}`}>
				<img src={image} alt="" />
			</Link>
			<div>
				<h4>{title}</h4>
				{renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
				<div className={classes.rating}>
					{/* rating */}
					<Rating value={rating?.rate} precision={0.1} />
					{/* count */}
					<small>{rating?.count}</small>
				</div>
				<div>
					{/* price */}
					<Currencyformat amount={price} />
				</div>
				<button className={classes.button}>add to cart</button>
			</div>
		</div>
	);
}

export default ProductCard;
