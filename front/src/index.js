import React from "react";
import {createRoot} from "react-dom/client";

const App = () => {
	return <h1>React from scratch</h1>;
};

const container = document.querySelector("main#application-root");
const root = createRoot(container);
root.render(<App />);
