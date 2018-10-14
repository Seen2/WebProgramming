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

app.listen(3000,()=>console.log('listening in on port 3000')
);
