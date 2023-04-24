class Product
{
    constructor(name,price,description) {
        this.name = name;
        this.price = price;
        this.description = description;
        inStock = true;
    }

    display() {
        "Name: " + this.name + "$" + this.price + "Description:" + this.description;
    }
}

module.exports = Product
