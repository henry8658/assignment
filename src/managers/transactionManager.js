export default class TransactionManager
{
    constructor()
    {
        this.nthTransaction = 0;
        this.totalPurchaseCount = 0;
        this.totalDiscountPurchaseCount = 0;
    }
    setN(nth)
    {
        this.nthTransaction = Number(nth);
    }
    updatePurchaseCount()
    {
        this.totalPurchaseCount++;
    }
    updateDiscountPurchaseCount()
    {
        this.totalDiscountPurchaseCount++;
    }
    getN()
    {
        return this.nthTransaction;
    }
    getTotalPurchaseCount()
    {
        return this.totalPurchaseCount;
    }
    getDiscountPurchaseCount()
    {
        return this.totalDiscountPurchaseCount;
    }
}