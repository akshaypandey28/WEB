import {readFile,writeFile} from 'fs/promises';
console.log(import.meta.url); //gives the current directory used in place of 
//__dirname
console.log();
console.log();
const filePath=new URL('./index.html' , import.meta.url); //6 7 8 line is for reading the file
let data=await readFile(filePath,{encoding : 'utf8'}); //let is used
console.log(data);

const obj ={ //this is object creation not any relation to index.html
    title:'akshay pandey',
    body:'nit patna',
    content:'nit',
}

for(const [key,value] of Object.entries(obj)){
    data=data.replace(`{${key}}`,value) //firstly {title}
} //key value pair value is the content of the obj

await writeFile(new URL ('./index.html',import.meta.url),data); //writing of the content for changing with the new value