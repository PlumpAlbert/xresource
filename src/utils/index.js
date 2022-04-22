/**
 * @typedef Colorscheme
 * @property {string} fg
 * @property {string} bg
 * @property {string} cursorColor
 * @property {string} c0
 * @property {string} c1
 * @property {string} c2
 * @property {string} c3
 * @property {string} c4
 * @property {string} c5
 * @property {string} c6
 * @property {string} c7
 * @property {string} c8
 * @property {string} c9
 * @property {string} c10
 * @property {string} c11
 * @property {string} c12
 * @property {string} c13
 * @property {string} c14
 * @property {string} c15
 */

/**
 * Retrieves colorscheme names from server
 *
 * @async
 * @returns {Promise<string[]>}
 */
export async function getAvailableColorschemes() {
	const response = await fetch(process.env.API_URL + "/colorschemes");
	if (!response.ok) {
		throw {error: true, message: response.statusText};
	}
	/** @type {Array} */
	const fileNames = await response.json();
	/** @type {Array<Colorscheme>} */
	const colorschemes = fileNames.reduce((obj, {type, name}) => {
		if (type !== "file") return obj;
		if (name === "*") return obj;
		return [...obj, name];
	}, []);
	return colorschemes;
}

/**
 * Fetches colorscheme from server
 *
 * @async
 * @param {string} name - Colorscheme name to retrieve
 * @returns {Promise<Colorscheme>}
 */
export async function fetchColorscheme(name) {
	const response = await fetch(
		process.env.API_URL + "/colorschemes/" + encodeURIComponent(name)
	);
	if (!response.ok) {
		throw {error: true, message: await response.text()};
	}
	const colorscheme = await response.json();
	return colorscheme;
}
