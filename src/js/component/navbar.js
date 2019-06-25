import React from "react";
import { Link } from "react-router-dom";
import { price } from "../component/price.js";

// import { Cart } from "../component/cartItem.js";
import { Context } from "../store/appContext.js";
export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-5">
				<div className="container">
					<a className="navbar-brand">Todo List</a>
					<form className="form-inline">
						<ul className="navbar-nav mr-auto">
							<Context.Consumer>
								{({ store, actions }) => {
									let message = "";
									let path = "/login";
									const userStatus = store.person.find(user => {
										return user.logged_in === true;
									});
									if (userStatus) {
										message = "Welcome " + userStatus.email;
										path = "/logout";
									} else {
										message = "Login";
									}

									return (
										<li className="nav-item active">
											<Link to={path} className="nav-link">
												{message}
											</Link>
											<span className="sr-only" />
										</li>
									);
								}}
							</Context.Consumer>

							<li className="nav-item active">
								<Link to="/products" className="nav-link">
									<i className="fas fa-shopping-cart" />
								</Link>
								<span className="sr-only" />
							</li>
						</ul>

						<Context.Consumer>
							{({ store, actions }) => {
								let cartTotal = 0;
								store.cart.forEach((item, index, history) => {
									let product = store.products.find(products => {
										return products.sku === item.sku;
									});
									cartTotal += product.price * item.quantity;
								});
								return (
									<div className="text-wrap">
										<span className="small badge badge-danger">{price(cartTotal)}</span>
									</div>
								);
							}}
						</Context.Consumer>
					</form>
				</div>
			</nav>
		);
	}
}

// <Link to="/login">
// 							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
// 								Login
// 							</button>
// 						</Link>
