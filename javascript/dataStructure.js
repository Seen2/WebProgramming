arr=[()=>console.log("hello!"),"shintu",9,"S"];
arr[0]();

var arrMethods=()=>{
				console.log("array length:"+arr.length);
				console.log(arr);
				console.log(arr.shift())
				console.log("after shift:"+arr);
				arr.pop()
				console.log("after pop:"+arr);
				arr.push(()=>console.log(9))
				console.log("after push:"+arr);
				arr.unshift("a");
				console.log("after unshift:"+arr);
				console.log(arr.sort());

}

arrMethods();
