const mongoose=require('mongoose');

//mongoose.connect("mongodb://localhost/langApp");

mongoose.connect("mongodb://localhost:27017/langApp", { useNewUrlParser: true })
var langSchema=new mongoose.Schema({
				name:String,
				rank:Number,
				cType:Boolean,
});

var lang=mongoose.model("Language",langSchema);

//==> saving data

//var c=new lang({name:'c',rank:4,cType:true}); //creating data

//saving created data via save 
//c.save((err,lang)=>{
// 			if(err){
// 							console.log("something went wrong");
// 			}
// 			else{
// 							console.log("saved!");
// 							console.log(lang);
// 			}
//
//
//});

//==> creating and saving data at same time via create

lang.create({name:'javaScript',rank:1,cType:true},(err,lang)=>{
				if(err){
								console.log("something went wrong");
				}
				else{
								console.log("saved!!");
								console.log(lang);
				}
});

//==> retreiving data from database via find
lang.find({},(err,data)=>{
				if(err){
								console.log("something went wrong");
				}
				else{
								console.log("here is all");
								console.log(data);
				}

});



