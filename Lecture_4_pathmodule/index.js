// console.log("we are learning path module")
import path from 'path'

// join two or more files
const fullPath = path.join('/path' , 'index.html' , 'index.js')
// console.log("files is join " , fullPath)

// Absolute path
const absolutepth = path.resolve();
// console.log("we r currently in abbsolute apth" , absolutepth)

//Extenstion check
const extname = path.extname('resume.pdf')
console.log(extname)
if(extname=='.pdf'){
    console.log("OK ")
}
else{
    console.log("Not OK")
}
