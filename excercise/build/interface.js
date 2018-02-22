"use strict";
// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function taste(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
};
taste(ice_cream);
//# sourceMappingURL=c:/Users/yolly/typescript/excercise/build/interface.js.map