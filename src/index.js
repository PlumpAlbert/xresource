import React from "react";
import {createRoot} from "react-dom/client";
import {getAvailableColorschemes} from "./utils";
import ColorScheme from "./components/ColorScheme";

const App = () => {
	const [colorschemes, setColorschemes] = React.useState([]);
	React.useEffect(() => {
		getAvailableColorschemes().then(result => {
			setColorschemes(result);
		});
	}, []);
	return (
		<div className="app">
			{colorschemes && colorschemes.map(v => <ColorScheme key={v} name={v} />)}
		</div>
	);
};

const container = document.querySelector("main#application-root");
const root = createRoot(container);
root.render(<App />);
