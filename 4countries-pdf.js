import fs from 'fs'
import PDFDocument from 'pdfkit-table'

let doc = new PDFDocument({ margin: 30, size: 'A4' })

doc.pipe(fs.createWriteStream('countries.pdf'))
createPdf(doc).then(() => doc.end())

function createPdf() {
	const table = {
		title: 'Country',
		subtitle: 'Capital',
		headers: ['Country', 'Capital', 'Population'],
		rows: getCountries()
	}
	return doc.table(table, { columnsSize: [200, 100, 100] })
}

function getCountries() {
  let countries = readJsonFile('data/countries.json')
  countries.sort((c1, c2) => c1.name.common.localeCompare(c2.name.common))
  return countries.map(country => [country.name.common, country.capital, country.population.toLocaleString()])
}

function readJsonFile(path) {
  const str = fs.readFileSync(path, 'utf8')
  const json = JSON.parse(str)
  return json
}