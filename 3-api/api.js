const request=require('request');

module.exports =request("https://www.reddit.com/r/aww.json",(err,res,body)=>{
				if(err){
								console.log("error occured..!!");
								console.log(err);
				}
				else{
								console.log(body); //depneding on url it will print api
				}


});
