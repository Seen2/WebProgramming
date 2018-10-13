const express= require('express');
const bodyParser=require('body-parser');


let freinds=[{name:'Shintu'} ,{name:'Lokpati'}];
app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.set("view engine","ejs");

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
