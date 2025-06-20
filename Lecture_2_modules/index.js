console.log("we are learning here Modules in node js")

// const {sum , sub , mul , div} = require("./utils")

import {sum , sub , div , mul} from './utils.js'
console.log("adding two number = ", sum(10 , 30))
console.log("subtract two number = ", sub(10 , 20))
console.log("divide two number = ", div(10 , 50))
console.log("multiply two number = ", mul(10 , 60))