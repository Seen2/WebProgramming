var x=10;
function setX(){
	x=9;
}
function printX(){
	console.log(x);
}

//printX();
//setX();
//printX();
//


const obj={
	firstName:'Hello',
	lastName:'world',
	greet:function (){
		firstName='functionOld';
		console.log(typeof this);
		console.log('hi ',this.firstName);
	},
	greetNew:()=>{
		this.firstName='function';
		console.log(typeof this);
		console.log('hi ',this.firstName);
	}
};

obj.greet();
obj.greetNew();
