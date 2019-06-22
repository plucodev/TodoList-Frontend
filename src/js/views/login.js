import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import TodoItem from "../component/todoItem";
import { Context } from "../store/appContext";

export default class Login extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<React.Fragment>
								<div className="form-group">
									<label htmlFor="exampleInputUsername">Username</label>
									<input
										type="text"
										name="username"
										className="form-control"
										id="exampleInputUsername"
										placeholder="Enter username"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Email address</label>
									<input
										type="text"
										name="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
									<small id="emailHelp" className="form-text text-muted">
										Well never share your email with anyone else.
									</small>
								</div>

								<button
									type="submit"
									className="btn btn-primary"
									onClick={() => {
										actions.login(
											document.querySelector("[name=username]").value,
											document.querySelector("[name=email]").value
										);
									}}>
									Submit
								</button>
								<button
									type="submit"
									className="btn btn-primary"
									onClick={() =>
										actions.registerUser(
											document.querySelector("[name=username]").value,
											document.querySelector("[name=email]").value
										)
									}>
									Register
								</button>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
