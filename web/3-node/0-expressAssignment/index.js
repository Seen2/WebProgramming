const express=require('express');

const app=express();

app.get('/',(req,res)=>{
				res.send('welcome to my first assignment');
}
);

app.get('/speak/:w',(req,res)=>{
				switch(req.params.w){
								case 'shintu':
												res.send('hello, darling (:');
												break;
								case 'lokpati':
												res.send('official...');
												break;
								default:
												res.send('Not found!! where are you?');
												

				}
}
);
app.get('/repeat/:what/:number',(req,res)=>{
				w=req.params.what;
				what='';
				for(let i=0;i<req.params.number;i++){
								what+=' '+w;
				}
				res.send(what);
}
);

app.get('/*',(req,res)=>{
				res.send('Not found!! where are you?');
}
);

app.listen(3000,()=>{
				console.log('server is running on port 3000');
});
