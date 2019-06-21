import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-5">
				<div className="container">
					<a className="navbar-brand">Todo List</a>
					<form className="form-inline">
						<Link to="/login">
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
								Login
							</button>
						</Link>
					</form>
				</div>
			</nav>
		);
	}
}
