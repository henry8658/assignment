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
            
            let response = _sendResponseWithDiscount(false);
            
            if (this.transManager.getN() % this.customerManager.getCustomerPurchaseCount(req.body.id) == 0 && 
                    this.discountCodeManager.getDiscount()) {
                this.transManager.updateDiscountPurchaseCount();
                response = _sendResponseWithDiscount(true);
            }
            
            this.transManager.updatePurchaseCount();
            
            return response;
        }
    }
    
    _sendResponseWithDiscount(discounted) {
        return res.status(200).json({
            perchasedWithDiscount: discounted
        });
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
