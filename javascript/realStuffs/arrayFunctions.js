// Complete the below questions using this array:
const array = [
				{
								username: "john",
								team: "red",
								score: 5,
								items: ["ball", "book", "pen"]
				},
				{
								username: "becky",
								team: "blue",
								score: 10,
								items: ["tape", "backpack", "pen"]
				},
				{
								username: "susy",
								team: "red",
								score: 55,
								items: ["ball", "eraser", "pen"]
				},
				{
								username: "tyson",
								team: "green",
								score: 1,
								items: ["book", "pen"]
				},

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let arr=[];
array.forEach((e)=>{
				let {username,team,score,items}=e;
				username="!"+username;
				obj={username,team,score,items};
				arr.push(obj);

});
//console.log(arr);
//as object inside array creates closure so i distctrured object to create new object and push it to newArray
//as it willn't mutate the original array.
arr=[];

//Create an array using map that has all the usernames with a "? to each of the usernames
arr=array.map((e)=>{
				let {username,team,score,items}=e;
				username="?"+username;
				obj={username,team,score,items};
				return obj;
});
//as object inside array creates closure so i distctrured object to create new object and push it to newArray
//as it willn't mutate the original array.
//console.log(array);
//console.log(arr);


//Filter the array to only include users who are on team: red
arr=array.filter((e)=>e.team=='red');

console.log(arr);


//Find out the total score of all users using reduce
const totalScore=array.reduce((a,e)=>e.score+a,0);//[]reduce((accumulator,eachELEMENT )=>{},initial value)

//console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {  //map also takes index as argument
				console.log(num, i);
				alert(num);
				return num * 2;
})
//1=> as alert will popup and stop execution until its respoed back then at the time console have 1,0
//2=>pure map function:
const newArray = arrayNum.map((num, i) => {  //map also takes index as argument
				return num * 2;
})
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
