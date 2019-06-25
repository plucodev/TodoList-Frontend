import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoItem from "./todoItem";

function TodoHooks() {
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState("");
	return (
		<div className="container">
			<div className="row text-center">
				<div className="col-md-12">
					<h1>Todo List With Hooks</h1>
				</div>
			</div>
			<div className="row">
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Recipient's username" />
					<div className="input-group-append">
						<button className="btn btn-outline-success" type="button" id="button-addon2">
							Add Todo
						</button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 m-auto">
					<TodoItem />
				</div>
			</div>
		</div>
	);
}

export default TodoHooks;
