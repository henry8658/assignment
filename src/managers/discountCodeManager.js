export default class DiscountCodeManager
{
    constructor(){
        this.discountCodeDB = new Array();
    }
    pushDiscount(discount)
    {
        this.discountCodeDB.push(discount);
    }
    getDiscount()
    {
        if (this.discountCodeDB.length == 0)
        {
            return false;
        } else
        {
            this.discountCodeDB.pop();
            return true;
        }
    }
}