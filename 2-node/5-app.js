const express=require('express');

app=express();

app.get('/',(req,res)=>{

				res.send('hello,world');
}
);

app.get('/hello',(req,res)=>{

				res.send('hello');
}
);

app.get('/shintu/:w',(req,res)=>{

				res.send('is boSS!');
}
);

app.get('/shintu/:w/Tiwari/:w',(req,res)=>{
				console.log(req.params);

				res.send(req.params.w);
}
);

app.get('/hello/w',(req,res)=>{

				let w=req.params.w


				res.send('hello ',w.toUpperCase());
}
);

app.get('/*',(req,res)=>{

				res.send('hello world!!');
}
);

app.listen(3000,
()=>console.log('listening in on port 3000')
);
