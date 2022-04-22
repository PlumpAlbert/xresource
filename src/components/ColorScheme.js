import React, {useState, useEffect, useMemo} from "react";
import {fetchColorscheme} from "../utils";

/** @type {React.FC<{name: string}>} */
const ColorScheme = ({name}) => {
	const [scheme, setScheme] = useState({});

	useEffect(() => {
		fetchColorscheme(name).then(data => setScheme(data));
	}, []);

	const colors = useMemo(() => {
		let colors = [];
		for (let i = 0; i < 15; ++i) {
			colors.push(
				<div
					key={`${name}-color-${i}`}
					className="color-block"
					style={{backgroundColor: scheme["c" + i]}}
				></div>
			);
		}
		return (
			<>
				<div className="colors-row">{colors.slice(0, 8)}</div>
				<div className="colors-row">{colors.slice(8)}</div>
			</>
		);
	}, [scheme]);

	return (
		<div
			className="colorscheme"
			style={{backgroundColor: scheme.bg, color: scheme.fg}}
		>
			<h3 className="colorscheme__name">{name}</h3>
			<div className="colorscheme__colors">{colors}</div>
		</div>
	);
};

export default ColorScheme;
