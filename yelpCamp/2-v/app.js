const express=require('express'),
      bodyParser=require('body-parser'),
      mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/yelpCamp", { useNewUrlParser: true })
				/*
				let data=[
								{name:'alpha-0',img:'https://www.mercurynews.com/wp-content/uploads/2018/07/SJM-RESTOCAMP-0712-1.jpg?w=620',},
								{name:'alpha-1',img:'https://www.mercurynews.com/wp-content/uploads/2018/07/SJM-RESTOCAMP-0712-3.jpg?w=620'}
				]
				
				*/

var YelpCampSchema=new mongoose.Schema(
				{
								name:String,
								img:String
				}
);

var camp=mongoose.model("camp",YelpCampSchema);

const app=express();
app.use(bodyParser.urlencoded({extended:true})); //used for post request to get body in request

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
				res.render('landing');
});

app.get("/camp",(req,res)=>{
				
				camp.find({},(err,data)=>{
								if(err){
												console.log("something went wrong");
								}else{
												res.render('campground',{data});
								}
				});
								
});

app.post("/camp",(req,res)=>{

				let newCamp=req.body;
				//data.push(newCamp);
				//saving data to data base

				camp.create(newCamp,(err,data)=>{
								if(err){
												console.log(err);
								}
								else{
												console.log("data saved!!");
								}
				});
				//retrieving data from data base
				camp.find({},(err,data)=>{
								if(err){
												console.log(err);
								}
								else{
												res.render('campground',{data});
								}
				});
				
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

