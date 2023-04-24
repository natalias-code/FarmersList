class Auth {
    constructor(customers) {
        this.customers = [];
    }
    register(name, email, shippingAddress)
    {
        let customer = new Customer(name,email,shippingAddress);

        this.customers.push(customer);
    }
    login(email)
    {
        let customer = this.customers.find(customer => customer.email === email)
    }
}

module.exports = Auth;
