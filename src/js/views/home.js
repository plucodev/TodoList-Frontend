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
								<div className="input-group mb-3 w-50 m-auto">
									<input
										type="text"
										className="form-control"
										name="item"
										placeholder="What I have to do?????"
										aria-label="Recipient's username"
										aria-describedby="button-addon2"
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary"
											onClick={() => actions.addTodo(document.querySelector("[name=item]").value)}
											type="button"
											id="button-addon2">
											Add New Todo
										</button>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
					<TodoItem />
				</div>
			</React.Fragment>
		);
	}
}
