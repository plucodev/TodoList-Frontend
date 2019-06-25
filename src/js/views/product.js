import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.scss";
import ProductCard from "../component/productCard";
import { Context } from "../store/appContext";

export class Product extends React.Component {
	render() {
		return (
			<div className="container">
				<ProductCard />
			</div>
		);
	}
}
