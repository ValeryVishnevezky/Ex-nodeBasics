import fs from 'fs'

sumFromFile()
.then(sum =>{console.log('res:', sum)})

function sumFromFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('data/nums.txt', 'utf8', (err, content) => {
            if (err) {
                reject(err)
                return console.log('Cannot read file', err)
            }
            const numbers = content.split('\r\n')
            const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0)
            resolve(sum)
        })
    })
}