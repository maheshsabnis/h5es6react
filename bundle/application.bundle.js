"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductInfo = function () {
    function ProductInfo() {
        _classCallCheck(this, ProductInfo);

        // product array
        this.products = [];
        // headers array
        this.headers = ["ProductId", "ProductName", "Manufacturer", "Price"];
        // manufacturer array
        this.manufacturers = ["IBM", "Bajaj", "Asus", "Parle"];

        // initialize the products array with default data
        this.products.push({
            ProductId: 101,
            ProductName: "Laptop",
            Manufacturer: "IBM",
            Price: 200000
        });
        this.products.push({
            ProductId: 102,
            ProductName: "Iron",
            Manufacturer: "Bajaj",
            Price: 2000
        });
    }

    _createClass(ProductInfo, [{
        key: "getProducts",
        value: function getProducts() {
            return this.products;
        }
    }, {
        key: "saveProduct",
        value: function saveProduct(prd) {
            this.products.push({
                ProductId: prd.ProductId,
                ProductName: prd.ProductName,
                Manufacturer: prd.Manufacturer,
                Price: prd.Price
            });
            return this.products;
        }
    }]);

    return ProductInfo;
}();
