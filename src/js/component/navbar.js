import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand">Todo List</a>
				<form className="form-inline">
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Login
					</button>
				</form>
			</nav>
		);
	}
}
