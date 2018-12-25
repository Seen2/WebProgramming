const express=require('express');
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.json());//use bodyParser to get post request.body

app.get('/',(req,res)=>{
	res.send("hello! dear");
});

app.listen(3000,()=>{
	console.log("listening on 3000..");
});

app.post('/signin',(req,res)=>{
	res.send("post request accepted");
});
