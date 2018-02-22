"use strict";
var Menu = /** @class */ (function () {
    // A straightforward constructor. 
    function Menu(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
//# sourceMappingURL=c:/Users/yolly/typescript/excercise/build/classes.js.map