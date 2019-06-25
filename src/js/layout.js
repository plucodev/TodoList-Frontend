import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import Login from "./views/login";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Cart } from "./views/cart.js";

import Dashboard from "./component/dashboard";
import { Product } from "./views/product";
import { Navbar } from "./component/navbar";
import TodoHooks from "./component/todoHooks";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/product" component={Product} />
							{/*<Route exact path="/single-product/:thesku" component={Single} />*/}
							<Route exact path="/todoHooks" component={TodoHooks} />
							<Route path="/cart" component={Cart} />
							<Route path="/demo" component={Demo} />
							{/*<Route path="/single/:theid" component={Single} />*/}
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
