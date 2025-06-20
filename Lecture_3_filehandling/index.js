// console.log("we r learing file handling")
import { dir } from 'console'
import {readFile , writeFile , appendFile , mkdir} from 'fs/promises'
// const read_file  = async (filename) =>{
//     const data = await readFile(filename , 'utf-8')
//     console.log(data)
// }
// read_file('read.txt')

// writefile
const write_file = async(filename , content)=>{
    await writeFile(filename,content)
    console.log("created")

}
write_file('ap.py' , 'sameer is a good devloper')

// appendfile
const append_file = async(filename , content)=>{
    await appendFile(filename , content)
    console.log("etc content addded ")
}
// append_file('ap.py' , 'sameer gooog fooogo ednsakHDJahkjdklAJDLKJKLajklj')


// create folder directory
const create_dir = async(dir)=>{
    await mkdir(dir)
}
create_dir('foldercreate')

