import React from "react";
import { Link } from "react-router-dom";

class TodoItem extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-header">card header</div>
				<div className="card-body">card body</div>
				<div className="card-footer">card footer</div>
			</div>
		);
	}
}

export default TodoItem;
