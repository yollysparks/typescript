"use strict";
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.email = email;
        this.id = Person.nextId++;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Person.nextId = 100;
    return Person;
}());
var p = new Person("Kurt Won", "kkr@.dk");
var p2 = new Person("Kurt Wone", "kkr@.dk");
var p3 = new Person("Kurt Wonne", "kkr@.dk");
console.log(p.id, p.getName);
console.log(p3.id, p.getName);
//# sourceMappingURL=c:/Users/yolly/typescript/build/classDemo.js.map