const fs=require('fs')
const transformStream=require('stream')
let fileStream=fs.createReadStream(__dirname+"/input.txt")//this is used for reading the data that is readStream
let outputStream=process.stdout;

//readstream.pipe(writestream)

let middleStream=new transformStream.Transform({
    transform(chunk,encoding,nextCallBack){
        let modifiedChunk=chunk.toString().toUpperCase()
        this.push(modifiedChunk) //here i am trying to read something from readStream and then pushes it into a writeable Stream
        setTimeout(nextCallBack,1000) //next chunk with a delay of 1seconds
    }
});


/* fileStream.pipe(outputStream) */  //readstream.pipe(writestream)

let newReadableStream=fileStream.pipe(middleStream) //this will return a readable Stream from a writeable Stream that is middleStream
newReadableStream.pipe(outputStream)  //readstream.pipe(writestream)