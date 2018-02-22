"use strict";
function personLogger(person) {
    var str = "\n    *****************************\n    ID: " + person.id + "\n    Name: " + person.firstName + " " + person.lastName + "\n    Phone: " + person.landLine + "\n    *****************************\n    ";
    console.log(str);
}
var p1 = { id: 1, firstName: "Kurt", lastName: "Wonnegurt", email: "@", landLine: "1234" };
personLogger(p1);
//class Person implements Iperson{}
//# sourceMappingURL=c:/Users/yolly/typescript/build/interfaceDemo.js.map