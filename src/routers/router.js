import express from 'express';
let router = express.Router();
import CustomerManager from '../managers/customerManager';
import TransactionManager from '../managers/transactionManager';
import DiscountManager from '../managers/discountCodeManager';
import CustomerAPI from '../apis/customer/customer_api'
import AdminAPI from '../apis/admin/admin_api'

const customerManager = new CustomerManager();
const transactionManager = new TransactionManager();
const discountManager = new DiscountManager();

const customerAPI = new CustomerAPI({
    customer: customerManager,
    discount: discountManager,
    transaction: transactionManager
}); 

const adminAPI = new AdminAPI({
    discount: discountManager,
    transaction: transactionManager
});

router.route('/getDiscount').post(customerAPI.getDiscountFunction());
router.route('/setDiscount').post(adminAPI.setDiscountFunction());
router.route('/purchase').post(customerAPI.getPurchaseFunction());
router.route('/getTotalPurchaseCount').get(adminAPI.getTotalPurchaseCountFunction());
router.route('/getTotalDiscount').get(adminAPI.getTotalDiscountFunction());

module.exports = router;
