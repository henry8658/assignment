import Discount from '../../model/discount'

export default class AdminAPI
{
    constructor({discount, transaction})
    {
        this.discountCodeManager = discount;
        this.transManager = transaction;
    }

    getTotalPurchaseCountFunction()
    {
        return (req, res) =>
            {
                return res.status(200).json({
                    totalPurchaseCount: this.transManager.getTotalPurchaseCount()
                });
            }
    } 

    getTotalDiscountFunction()
    {
        return (req, res) =>
            {
                return res.status(200).json({
                    totalDiscountCount: this.transManager.getDiscountPurchaseCount()
                });
            }
    }
    
    setDiscountFunction()
    {
        return (req, res) =>
        {
            let input = req.body.n;
            this.transManager.setN(input);
            this.discountCodeManager.pushDiscount(new Discount(req.body.discountCode));

            return res.status(200).json({
                success : true,
                n : input
            });
        }
    } 
}

