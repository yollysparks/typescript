"use strict";
var isDone = true;
isDone = false;
var count = 1;
count = 6;
var user = "Kurt Wonnegurt";
var msg = " ******************** \nHi " + user + "welcome today\n******************************* \n";
console.log(msg);
var number = [1, 2, 3, 4, 5, 6, 7];
var number2 = [];
number2.push(2);
var numberString = 1;
numberString = "5";
function logInfo(info) {
    console.log(info);
}
console.log(logInfo(5));
//Enums
var skill = 0;
var skills;
(function (skills) {
    skills[skills["low"] = 0] = "low";
    skills[skills["medium"] = 1] = "medium";
    skills[skills["high"] = 2] = "high";
    skills[skills["expert"] = 3] = "expert";
})(skills || (skills = {}));
if (skill === skills.medium) {
    //do something
}
//# sourceMappingURL=c:/Users/yolly/typescript/build/typeDemo.js.map