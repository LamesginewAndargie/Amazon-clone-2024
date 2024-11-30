import React, { useEffect, useState } from "react";
import classes from "./productdetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { productUrl } from "../../Api/endPoints";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
	const { productId } = useParams();
	console.log(productId);
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				// console.log(res);
				setProduct(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);
	return (
		<Layout>
			{isLoading ? (
				<Loader />
			) : (
				<ProductCard product={product} flex={true} renderDesc={true} />
			)}
		</Layout>
	);
}

export default ProductDetail;
