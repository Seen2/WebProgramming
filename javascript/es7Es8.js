//ES7

s='hello';
console.log(s.includes('el')); //return true can also work with array

pow=5**3; //pow= 125

//ES8

//prev obj={a:b,c:d} now obj={a:b,c:d,} also destructuring

const obj={
	name:'Shintu',
	name0:'Shintu0',
	name1:'Shintu1',
}

//its now array ==> Object.keys(obj) or Object.entries(obj) or Object.values(obj)
Object.keys(obj).map(o=>console.log(o));
Object.entries(obj).map(o=>console.log(o));
Object.values(obj).map(o=>console.log(o));
