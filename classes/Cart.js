 class Cart {
    constructor(products,total) {
        this.products = [];
        this.total = 0;
    }

    addProduct ()
    {
        let product = new Product();

        this.products.push(product);

        product.total = this.total;
    }

    removeProduct(i)
    {

        this.products.pop(product[i]);

        product.total = this.total;

    }
}

module.exports =  Cart
