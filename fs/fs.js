
const fs = require("fs")
// readFile(file,data[,options],callback)
fs.readFile('./2.txt',(err,data) => {
    console.log(err,data);
})
