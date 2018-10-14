const express=require('express');

const app=express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
				res.render('landing');
});

app.get("/camp",(req,res)=>{
				let data=[
								{name:'alpha-0',img:'https://i0.wp.com/scoutingmagazine.org/wp-content/uploads/2008/05/Summer-Camp.jpg?fit=906%2C530&ssl=1',},
								{name:'alpha-1',img:'https://media-cdn.tripadvisor.com/media/photo-s/11/80/05/25/large-camping-area.jpg'}
				]
				res.render('campground',{data});
});

app.get("/*",(req,res)=>{
				res.send('cool..!coming soon..!!');
});

app.listen(3000,()=>{
				console.log("listening on port 3000");
});

