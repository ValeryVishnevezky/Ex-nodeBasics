// import fs from 'fs'
// import ms from 'ms'
const fs = require('fs')
const ms = require('ms')

readTimestamps()

function readTimestamps() {
    fs.readFile('data/timestamps.txt', 'utf8', (err, content) => {
        if (err) return console.log('Cannot read file', err)
        const timestamps = content.split('\r\n')
        timestamps.forEach((timestamp) => {
            const realTime = ms(timestamp, { long: true })
            console.log(`The timestamp ${timestamp} - Real time ${realTime}`  )
            
        })
    })
}