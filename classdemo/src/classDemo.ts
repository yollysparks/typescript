class Person {

    private static nextId: number = 100;
    public  readonly id: number;
    private _name: string;

constructor(name:string,private email: string){
  this.id = Person.nextId++;
  this._name= name;
 }
 get getName(){//its a way of creating getters
     return this._name;
  }
 set setName(n: string){
   this._name= n;
  }
}
let p: Person= new Person("Kurt Won","kkr@.dk");
let p2: Person= new Person("Kurt Wone","kkr@.dk");
let p3: Person= new Person("Kurt Wonne","kkr@.dk");
console.log(p.id,p.getName);
console.log(p3.id,p.getName);