const express=require('express');
const bodyParser=require('body-parser');


				let data=[
								{name:'alpha-0',img:'https://www.mercurynews.com/wp-content/uploads/2018/07/SJM-RESTOCAMP-0712-1.jpg?w=620',},
								{name:'alpha-1',img:'https://www.mercurynews.com/wp-content/uploads/2018/07/SJM-RESTOCAMP-0712-3.jpg?w=620'}
				]

const app=express();
app.use(bodyParser.urlencoded({extended:true})); //used for post request to get body in request

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
				res.render('landing');
});

app.get("/camp",(req,res)=>{
				res.render('campground',{data});
});

app.post("/camp",(req,res)=>{

				let newCamp=req.body;
				data.push(newCamp);
				res.render('campground',{data});
});

app.get("/camp/new",(req,res)=>{
				res.render('form');
});

app.get("/*",(req,res)=>{
				res.send('cool..!coming soon..!!');
});

app.listen(3000,()=>{
				console.log("listening on port 3000");
});

