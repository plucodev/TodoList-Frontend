import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

class TodoItem extends React.Component {
	render() {
		return (
			<ul className="list-group mt-5">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.todo.map((item, index) => {
							return (
								<li key={index} className="list-group-item">
									<span className="mr-3 text-success font-weight-bold">{item.id}</span>
									{item.todo_item}
									<div className=" float-right">
										<button className="btn">
											<i className="fas fa-pencil-alt mr-3" />
										</button>
										<button className="btn" onClick={() => actions.deleteTodo(item.id)}>
											<i className="fas fa-trash-alt" />
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

export default TodoItem;
