import React, { useContext } from "react";
import classes from "./cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import Currencyformat from "../../Components/Currencyformat/Currencyformat";
import { Link } from "react-router-dom";
function Cart() {
	const [{ basket, user }, dispatch] = useContext(DataContext);
	// console.log(basket);
	const total = basket.reduce((amount, item) => {
		return item.price + amount;
	}, 0);
	return (
		<Layout>
			<section className={classes.container}>
				<div className={classes.cart_container}>
					<h2>Hello</h2>
					<h3>Your shopping basket</h3>
					<hr />
					{basket?.length == 0 ? (
						<p>Opps! No item in your cart</p>
					) : (
						basket?.map((item, i) => {
							return (
								<ProductCard
									key={i}
									product={item}
									renderDesc={true}
									flex={true}
									renderAdd={false}
								/>
							);
						})
					)}
				</div>
				{basket?.length !== 0 && (
					<div className={classes.subtotal}>
						<div>
							<p>Subtotal ({basket?.length} items)</p>
							<Currencyformat amount={total} />
						</div>
						<span>
							<input type="checkbox" />
							<small>This order contains a gift</small>
						</span>
						<Link to="/payments">Continue to checkout</Link>
					</div>
				)}
			</section>
		</Layout>
	);
}

export default Cart;
