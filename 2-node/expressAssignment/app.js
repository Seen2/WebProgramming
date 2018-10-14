const express=require("express");

app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{

				res.send('<h1 style="text-align:center;">Hello, Darling<h1>');
}
);

app.get('/hello',(req,res)=>{
				res.send('hello');
}
);

app.get('/shintu/:who',(req,res)=>{
				let name=req.params.who;
				res.render('greet',{name});
}
);

app.get('/*',(req,res)=>{
				res.render('goodbye');
}
);


app.listen(3000,()=>console.log('listening in on port 3000')
);
