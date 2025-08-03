import fs from 'fs'
import ms from 'ms'

readTimestamps()

function readTimestamps() {
    fs.readFile('data/timestamps.txt', 'utf8', (err, content) => {
        if (err) return console.log('Cannot read file', err)
        const timestamps = content.split('\r\n')
        timestamps.forEach((timestamp) => {
            console.log(`The timestamp ${timestamp} - Real time ${ms(+timestamp, { long: true })}`  )
            
        })
    })
}