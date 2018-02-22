"use strict";
//Creating a function that takes an IBook instance and test it with an object instance.
function booksLibrary(book) {
    var str = "\n    *****************************\n    Title: " + book.title + "\n    Author: " + book.author + "\n    Published:" + book.published + "\n    Pages: " + book.pages + "\n    *****************************\n    ";
    console.log(str);
} //3c)Duck typing is that type-checking focuses on the shape that values have.
//3d)By making published and pages become optional we put a "?"at the end of the
//the value published and pages.
//3e) by making the author readonly you make it unchangeable it will be kinda static.
//3f) CREATING A CLASS BOOK
var Book = /** @class */ (function () {
    // A straightforward constructor. 
    function Book(title, author) {
        // The this keyword is mandatory.
        this.title = title;
        this.author = author;
    }
    Object.defineProperty(Book.prototype, "getTitle", {
        // Methods getter and setter
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "setTitle", {
        set: function (t) {
            this.title = t;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
var b = new Book("Black Panthers", "Ryan Coogler");
console.log(b.title, b.getTitle);
//# sourceMappingURL=c:/Users/yolly/typescript/excercise/build/interface1.js.map