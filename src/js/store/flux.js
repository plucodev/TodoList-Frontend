const getState = ({ getStore, setStore }) => {
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
			todo: []
		},
		actions: {
			login: (username, email) => {
				const store = getStore();
				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/login", {
					method: "POST",
					headers: { "Content-type": "application-json" },
					body: JSON.stringify({
						username: username,
						email: email
					})
				})
					.then(res => {
						return res.json();
					})
					.then(response => {
						//console.log(loggedInUser.user);
						localStorage.setItem("token", response.access_token);
						setStore({ token: response.access_token });
						console.log(localStorage.setItem);
						return true;
					})

					.catch(error => console.error("Error:", error));
			},
			addTodo: item => {
				const store = getStore();
				fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/todo", {
					method: "POST",
					headers: { "Content-type": "application-json" },
					body: JSON.stringify({
						todo_item: item
					})
				}).then(getUpdatedDataFromBackend => {
					fetch("https://3000-d8e924cf-c73b-489c-9c3f-30eb2e9739e2.ws-us0.gitpod.io/todo")
						.then(response => response.json())
						.then(data => {
							store.todo = data;
							setStore({ store });
						});
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
