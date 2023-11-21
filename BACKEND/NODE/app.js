var http=require('http')
var fs=require('fs')
http.createServer(function (req,res) { //file is sending at once completely
    // const text=fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)
    const fileStream=fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open' ,()=>{ //file is sending in chunks 
        fileStream.pipe(res) //pipe -> read into write also
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})
.listen(5000)