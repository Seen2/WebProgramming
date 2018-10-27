// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise=new Promise((resolve,reject)=>
	throw
	setTimeout(()=>resolve('sucess'),4000)
);
// #2) Run the above promise and make it console.log "success"
promise.then(res=>
	console.log(res)
);

try{
	    s=9
	    throw new Error('hi');
}catch(err){
	console.log(err.message);
}

/*	
const promise=new Promise((resolve,reject)=>{
	if(1){
		resolve('resolved');
	}else{
		reject('reject');
	}
});
*/
// #3) Read about Promise.resolve() and Promise.reject(). How can you make
//
