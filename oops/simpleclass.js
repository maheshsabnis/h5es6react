// note: Class name must be in Pascal case
class SimpleClass {
    // the public data members must be declared in ctor
    // with this prefix
    constructor() {
        this.name = "";
        this.msg = "";
    }
    processName(c) {
        this.name = "Es6";
        if (c == "U") return this.name.toUpperCase();
        if (c == "L") return this.name.toLowerCase();
    }
    set Message(msg) {
        this.msg = msg;
    }
    get Message() {
        return this.msg;
    }
}

let obj = new SimpleClass();
console.log(obj.processName("U"));
console.log(obj.processName("L"));
obj.Message = "The Property";
console.log(obj.Message);