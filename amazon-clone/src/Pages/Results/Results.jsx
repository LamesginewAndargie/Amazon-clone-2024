import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function Results() {
	const [products, setProducts] = useState([]);
	const { categoryName } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	// console.log(categoryName);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${productUrl}/products/category/${categoryName}`)
			.then((res) => {
				// console.log(res.data);
				setProducts(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				// console.log(err);
				setIsLoading(false);
			});
	}, []);

	return (
		<Layout>
			<section>
				<h1 style={{ padding: "30px" }}>Results</h1>
				<p style={{ padding: "30px" }}>Category/{categoryName}</p>
				<hr />
				{isLoading ? (
					<Loader />
				) : (
					<div className={classes.products_container}>
						{products?.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								renderDesc={false}
								renderAdd={true}
							/>
						))}
					</div>
				)}
			</section>
		</Layout>
	);
}

export default Results;
