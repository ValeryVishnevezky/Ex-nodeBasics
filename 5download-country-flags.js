import fs from 'fs'
import { download, readJsonFile } from "./util.js"

downloadCountryFlags()
function downloadCountryFlags() {
	const countries = getCountries()
	console.log('Countries:', countries.map((c) => c.name))
	downloadFlags(countries).then(() => {
		console.log('Your flags are ready')
	})
}
function getCountries() {
	let countries = readJsonFile('data/countries.json')
	countries.sort((c1, c2) => c1.population - c2.population)
	return countries.slice(0, 5)
}
function downloadFlags(countries) {
	const prms = countries.map((country) => {
		return download(country.flags.svg, `data/flags-svg/${country.name.common}.svg`)
	})
	return Promise.all(prms)
}
