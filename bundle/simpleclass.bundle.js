"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// note: Class name must be in Pascal case
var SimpleClass = function () {
    // the public data members must be declared in ctor
    // with this prefix
    function SimpleClass() {
        _classCallCheck(this, SimpleClass);

        this.name = "";
        this.msg = "";
    }

    _createClass(SimpleClass, [{
        key: "processName",
        value: function processName(c) {
            this.name = "Es6";
            if (c == "U") return this.name.toUpperCase();
            if (c == "L") return this.name.toLowerCase();
        }
    }, {
        key: "Message",
        set: function set(msg) {
            this.msg = msg;
        },
        get: function get() {
            return this.msg;
        }
    }]);

    return SimpleClass;
}();

var obj = new SimpleClass();
console.log(obj.processName("U"));
console.log(obj.processName("L"));
obj.Message = "The Property";
console.log(obj.Message);
