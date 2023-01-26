const http=require('http')
const server = http.createServer((req,res)=>{
if(req.method==='Get'&&req.url==='/'){
req.statusCode(200);
req.end();
}
})
server.listen(3001,()=>console.log('test'))