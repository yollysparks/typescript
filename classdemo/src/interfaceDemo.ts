interface  IPerson {
readonly id: number;
firstName:string;
lastName: string;
email: string;
landLine? : string;//? makes it to take any parameter

}
function personLogger(person: IPerson){
    const str=`
    *****************************
    ID: ${person.id}
    Name: ${person.firstName} ${person.lastName}
    Phone: ${person.landLine}
    *****************************
    `;
    console.log(str);
}
let p1:IPerson = {id:1,firstName: "Kurt",lastName:"Wonnegurt",email:"@",landLine:"1234"}
personLogger(p1);
//class Person implements Iperson{}


