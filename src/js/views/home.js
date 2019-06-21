import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import TodoItem from "../component/todoItem";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="input-group mb-3 w-50 m-auto item">
									<input
										type="text"
										className="form-control"
										name="item"
										placeholder="What I have to do?????"
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary"
											onClick={() => {
												actions.addTodo(document.querySelector("[name=item]").value);
											}}
											type="button">
											Add New Todo
										</button>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
					<TodoItem />
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="mt-3 text-danger">
									{"I have " + store.todo.length + " things to do!!!!"}
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</React.Fragment>
		);
	}
}
