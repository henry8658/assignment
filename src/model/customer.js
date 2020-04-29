export default class Customer 
 {
    constructor(id)
    {
        this.id = id;
        this.purchaseCount = 0;
    }
    setPurchaseCount(count)
    {
        this.purchaseCount = count;
    }

    getPurchaseCount()
    {
        return this.purchaseCount;
    }

}

