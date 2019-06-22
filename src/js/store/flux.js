const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			todo: [],
			token: [],
			person: []
		},
		actions: {
			getUpdatedTodo: () => {
				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/todo")
					.then(response => response.json())
					.then(data => {
						// store.todo = data;
						setStore({ todo: data });
					});
			},
			getUpdatedPerson: () => {
				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/person")
					.then(response => response.json())
					.then(data => {
						// store.todo = data;
						setStore({ person: data });
					});
			},
			deleteTodo: id => {
				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/todo/" + id, {
					method: "DELETE"
				}).then(() => {
					getActions().getUpdatedTodo();
				});
			},
			registerUser: (username, email) => {
				const store = getStore();
				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/person", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email
					})
				});
			},
			getStorage: () => {
				const store = getStore();

				// localStorage.setItem("jwt", "response.access_token");
				// console.log(localStorage.getItem("jwt"));
				// console.log("paolo");
			},
			login: (username, email) => {
				const store = getStore();

				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/login", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email
					})
				})
					// .then(localStorage.setItem("jwtw", "response.access_token"))
					.then(res => res.json())
					.then(data => {
						console.log(data);
						localStorage.setItem("jwt", data.jwt);
					})
					.catch(error => console.error("Error:", error));
				// .then(data => {
				// 	console.log(data);
				// 	store.token = data;
				// 	setStore({ token: data });
				// });
				//console.log(loggedInUser.user);

				// console.log(response);
				// store.token = response.jwt;
				// setStore({ store });
				// console.log(localStorage.getItem("jwt"));
				// console.log(response.access_token);
			},
			addTodo: item => {
				const store = getStore();
				const act = getActions();
				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/todo", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						todo_item: item
					})
				}).then(updatedData => {
					act.getUpdatedTodo();
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
