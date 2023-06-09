const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname, 'files');

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirpath}/helloo${i}.txt`, 'hi how you doing? baby')
// }
// const input = process.argv

// fs.writeFileSync(input[2], input[3])

// console.log(process.argv)
fs.readdir(dirpath, (err, files) => {
    files.forEach((item) => {
        console.log(item)
    })
})


