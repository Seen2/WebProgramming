//Evaluate these:
//#1
/*
[2] === [2] //false
{} === {} //false
*/
//#2 what is the value of property a for each object.
//=>well, after line 12 (or five line of execution) object1={a:4},object2={a:4},object3={a:4},object4={a:5}
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal{
				constructor(name="notGiven"){
								this.name=name;

				}
}

class Mamal extends Animal{
				constructor(name,color){
								super(name);
								this.color=color;
				}
				sound(){
								console.log("i am ",this.name,"i have color ",this.color);
				}
}

const crow=new Mamal("crow","black");
crow.sound();
