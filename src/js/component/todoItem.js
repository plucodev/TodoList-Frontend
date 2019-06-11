import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

class TodoItem extends React.Component {
	render() {
		return (
			<ul className="list-group mt-5">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.demo.map((item, index) => {
							return (
								<li key={index} className="list-group-item">
									k
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
