const http=require('http');

const server=http.createServer((req,res)=>{
	console.log("listening..");
	res.setHeader("Content-Type",'text/html');
	res.end("<h1>hello world <h1>");
	console.log(req.url)
});
server.listen(8000);
