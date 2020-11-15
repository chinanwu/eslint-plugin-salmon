// const gendered = require('../resources/gendered');
import gendered from '../resources/gendered';

// module.exports = (term, lang) => {
export default (term, lang) => {
	const list = gendered[lang];
	console.log(list);
};
