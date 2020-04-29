export default class CustomerAPI
{
    constructor({customer, discount, transaction}) 
    {
        this.customerManager = customer;
        this.discountCodeManager = discount;
        this.transManager = transaction; 
    }

    getPurchaseFunction()
    {
        return (req, res) => {
            this.customerManager.setCustomerPurchaseCount(req.body.id);
            if (this.transManager.getN() % this.customerManager.getCustomerPurchaseCount(req.body.id) == 0)
            {
                if (this.discountCodeManager.getDiscount())
                {
                    this.transManager.updateDiscountPurchaseCount();
                    this.transManager.updatePurchaseCount();
                    res.status(200).json({
                        perchasedWithDiscount: true
                    });
                } else
                {
                    this.transManager.updatePurchaseCount();
                    res.status(200).json({
                        perchasedWithDiscount: false
                    });
                }
            } else
            {
                this.transManager.updatePurchaseCount();
                res.status(200).json({
                        perchasedWithDiscount: false
                });
            }
        }
    }

    getDiscountFunction()
    {
        return (req, res) => {
            if (this.transManager.getN() ==  this.customerManager.getCustomerPurchaseCount(req.body.id))
            {
                return res.status(200).json({
                    isDiscountAvailable: true
                });
            }
            else 
            {
                return res.status(200).json({
                    isDiscountAvailable: false
                });
            }
        }
    }
}
