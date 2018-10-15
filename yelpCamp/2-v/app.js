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
								img:String,
								des:String,
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
												res.render('index',{data});
								}
				});
								
});

app.post("/camp",(req,res)=>{

				let newCamp=req.body;
				console.log(newCamp);
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
												res.render('index',{data});
								}
				});
				
});

app.get("/camp/new",(req,res)=>{
				res.render('form');
});

app.get("/camp/:id",(req,res)=>{
				
				camp.findById({_id:req.params.id},(err,campInfo)=>{
								if(err){
												console.log("something went wrong with id");
												res.send("<h1>something went rong...!</h1>");
								}
								else{
												res.render('show',{campInfo});

								}
				});
});

app.get("/*",(req,res)=>{
				res.send('cool..!coming soon..!!');
});

app.listen(3000,()=>{
				console.log("listening on port 3000");
});

