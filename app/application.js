class ProductInfo {
    constructor() {
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

    getProducts() {
        return this.products;
    }

    saveProduct(prd) {
        this.products.push({
            ProductId: prd.ProductId,
            ProductName: prd.ProductName,
            Manufacturer: prd.Manufacturer,
            Price: prd.Price
        });
        return this.products;
    }
}