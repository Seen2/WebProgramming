const express= require('express');

let freinds=[{name:'Shintu'} ,{name:'Lokpati'}];
app=express(); //config express

//app.use(bodyParser.urlencoded({extended:true})); //used for body as post data in request(req)

app.use(express.static('public')); //public directory will be get served by express
app.set("view engine","ejs"); //express will add ejs where it doesn't have file extension

app.get('/',(req,res)=>{
				res.render('search');
});

app.get('/results',(req,res)=>{
				
				const request=require('request');
				let movie=req.query.movie || 'stars';
				console.log(req.query);

				request(`http://www.omdbapi.com/?s=${movie}&&apikey=852159f0`,(err,response,body)=>{
								let data=JSON.parse(body) 
								if(err){
												console.log(err);
												res.send('something went wrong');
								}
								else if (data && response.statusCode==200 ){
												//console.log(JSON.parse(body)); 
												//depneding on url it will print api JSON.parse will conver str JSON to object

												res.render('results',{data});
								}
								else{
												res.send("something went very wrong");
								}



				});
				
});

app.get('/*',(req,res)=>{
				res.send('<h1 style="text-align:center;background-color:red;"> Sorry Darling..<br/>comming soon..! </h1>');
});

app.listen(3000,()=>console.log('listening...on 3000'));
