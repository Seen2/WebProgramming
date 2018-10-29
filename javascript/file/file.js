const f=require('fs');

f.readFile('./test.text',(err,data)=>{
	console.log("1:",data.toString('utf8'));
});

const file=f.readFileSync('./test.text');
console.log("2:",file.toString())

f.appendFile('./test.text',"appending",(err)=>{
	if(err){
		console.log(err);
	}
});

f.writeFile("./0-test.text","wiriting new file",(err)=>{
	if(err){
		console.log(err);
	}
});

//deleting file
f.unlink("./0-test.text",(err)=>{
	if(err){
		console.log(err);
	}
});
