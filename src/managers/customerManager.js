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
            this.customerDB.get(customerID).setPurchaseCount(1);
        }
        else
        {
            this.customerDB.get(customerID).setPurchaseCount(
                this.customerDB.get(customerID).getPurchaseCount() + 1
            );
        }
    }

    getCustomerPurchaseCount(customerID)
    {
        if (this.customerDB.has(customerID))
        {
            return this.customerDB.get(customerID).getPurchaseCount();
        }
    }
}
