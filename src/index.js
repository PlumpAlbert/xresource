import React from "react";
import {createRoot} from "react-dom/client";
import {getAvailableColorschemes, fetchColorscheme} from "./utils";

const reducer = (state, action) => {
	switch (action.type) {
		case "update": {
			const {name, value} = action.payload;
			return {...state, [name]: value};
		}
		case "set":
			return action.payload;
		default:
			return state;
	}
};

const App = () => {
	const [colorschemes, dispatch] = React.useReducer(reducer, {});
	React.useEffect(() => {
		getAvailableColorschemes().then(result => {
			dispatch({type: "set", payload: result});
			fetchColorscheme(Object.keys(result)[0]).then(value => {
				console.log("value", value);
				dispatch({type: "update", value});
			});
		});
	}, []);
	return <h1>React from scratch</h1>;
};

const container = document.querySelector("main#application-root");
const root = createRoot(container);
root.render(<App />);
