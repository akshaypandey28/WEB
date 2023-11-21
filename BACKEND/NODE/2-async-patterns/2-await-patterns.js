const { readFile, writeFile} =require('fs'); 
//const path = require('path');
const util=require('util') ;//module

const readFilePromise=util.promisify(readFile)          
const writeFilePromise=util.promisify(writeFile)          




const start=async() => {
    try {
        const first=await readFilePromise('./content/first.txt','utf8') //i can use readFile intead of readFilePromise
        const second=await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/result-mind-grenade.txt',
        `This is awesome : ${first} ${second}`
        )
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()


// const getText=(path) => { //if to read two files at a time
//     return new Promise( (resolve,reject) => {
//         readFile(path,'utf8', (err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         }) 
//     })
// }

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))