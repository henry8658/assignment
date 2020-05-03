import Customer from '../model/customer'

export default class CustomerManager
{
    constructor()
    {
        this.customerDB = new Map();
    }
    setCustomerPurchaseCount(customerID)
    {
        if (!this.customerDB.has(customerID))
        {
            this.customerDB.set(customerID, new Customer(customerID));
        }
        this.customerDB.get(customerID).incrementPurchaseCount(); // do this in customer that adds one on what it has. This should also add for the case of no customerID as customer starts off purchaseCount with 0
        
    }

    getCustomerPurchaseCount(customerID)
    {
        if (this.customerDB.has(customerID))
        {
            return this.customerDB.get(customerID).getPurchaseCount();
        }
    }
}
