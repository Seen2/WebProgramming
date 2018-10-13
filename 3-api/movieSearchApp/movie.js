const request=require('request');


request("http://www.omdbapi.com/?s=star&&apikey=852159f0",(err,res,body)=>{
				if(err){
								console.log("error occured..!!");
								console.log(err);
				}
				else{
								console.log(JSON.parse(body)); //depneding on url it will print api JSON.parse will conver str JSON to object
				}


});
