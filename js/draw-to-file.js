const fs = require('fs')

drawSquareToFile()

function writeToFile(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('data/pic.txt', content, (err) => {
            if (err) {
                reject(err)
                return console.log('Cannot read file', err)
            }
            resolve()
        })
    })
}

function drawSquareToFile() {
    const str = getSquare(getRandomIntInclusive(3, 20))
    writeToFile(str)
        .then(() => {
            setTimeout(drawSquareToFile, 200)
        })
}

function getSquare(size) {
    var str = '*'.repeat(size) + '\n'
    for (let i = 0; i < size; i++) {
        str += '*' + ' '.repeat(size - 2) + '*\n'
    }
    str += '*'.repeat(size) + '\n'
    return str
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }