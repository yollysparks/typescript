let  isDone : boolean = true;
isDone= false;
let count: number = 1;
count = 6;
let user: string ="Kurt Wonnegurt";
let msg =` ******************** 
Hi ${user}welcome today
******************************* 
`;
console.log(msg);
let number: number[]= [1,2,3,4,5,6,7];
let number2: Array<number>= [];

number2.push(2);
let numberString: any = 1;
numberString= "5";

function logInfo(info: any){
    console.log(info);

}
console.log(logInfo(5))
//Enums
let skill= 0;''
enum skills {low,medium,high,expert}
if (skill=== skills.medium){
    //do something
}
