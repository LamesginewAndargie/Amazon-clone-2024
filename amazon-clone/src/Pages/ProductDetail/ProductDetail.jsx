import React, { useEffect, useState } from "react";
import classes from "./productdetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { productUrl } from "../../Api/endPoints";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
function ProductDetail() {
	const { productId } = useParams();
	// console.log(productId);
	const [product, setProduct] = useState([]);
	useEffect(() => {
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				// console.log(res);
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<Layout>
			<ProductCard product={product} />
		</Layout>
	);
}

export default ProductDetail;
