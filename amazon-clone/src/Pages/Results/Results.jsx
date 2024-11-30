import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
function Results() {
	const [products, setProducts] = useState([]);
	const { categoryName } = useParams();
	// console.log(categoryName);
	useEffect(() => {
		axios
			.get(`${productUrl}/products/category/${categoryName}`)
			.then((res) => {
				// console.log(res.data);
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Layout>
			<section>
				<h1 style={{ padding: "30px" }}>Results</h1>
				<p style={{ padding: "30px" }}>Category/{categoryName}</p>
				<hr />
				<div className={classes.products_container}>
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</Layout>
	);
}

export default Results;
