 x=42

let o={
	x:50,
	firstName:'jhon',
	greet: function(){
		console.log(this.firstName)
	}
	
}
//let greet=()=>console.log(this.x);
let greet= function(){
		console.log(this.x);
	}
greet();
o.greet1=greet
o.greet()
o.greet1()
//o.greet1();

/*
let gf = o.greet.bind(this);
gf();
greet: ()=>console.log(o.firstName)
*/
