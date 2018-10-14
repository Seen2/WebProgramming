const express= require('express');
const bodyParser=require('body-parser');


let freinds=[{name:'Shintu'} ,{name:'Lokpati'}];
app=express(); //config express
app.use(bodyParser.urlencoded({extended:true})); //used for body as post data in request(req)

app.use(express.static('public')); //public directory will be get served by express
app.set("view engine","ejs"); //express will add ejs where it doesn't have file extension

app.get('/',(req,res)=>{
				res.send('Home Page');
});

app.get('/freinds',(req,res)=>{

				res.render('freinds',{freinds});
});

app.post('/addfreind',(req,res)=>{
			  freind=req.body.newfreind;
				freinds.push({name:freind})
				res.redirect('/freinds');
				//res.render("addfreind");
});

app.get('/*',(req,res)=>{
				res.send('<h1 style="text-align:center;background-color:red;"> Sorry Darling..<br/>comming soon..! </h1>');
});

app.listen(3000,()=>console.log('listening...on 3000'));
