const request=require('request');

request("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400",(err,res,body)=>{
				if(err){
								console.log("error occured..!!");
								console.log(err);
				}
				else{
								let data=JSON.parse(body)
								sunset=data.results.sunset;
								console.log(sunset); //depneding on url it will print api
				}


});
