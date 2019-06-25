import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

class ProductCard extends React.Component {
	render() {
		return (
			<ul className="list-group mt-5">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.products.map((item, index) => {
							return (
								<li key={index} className="list-group-item">
									<span className="mr-3 text-success font-weight-bold">{item.sku}</span>
									{item.name}
									<div className="float-right">
										<button className="btn btn-info" onClick={() => actions.deleteTodo(item.id)}>
											{/*{<i className="fas fa-trash-alt" />}*/}
											Add To Cart
										</button>
									</div>
								</li>
							);
						});
					}}
				</Context.Consumer>
			</ul>
		);
	}
}

export default ProductCard;
