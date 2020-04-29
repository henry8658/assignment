import express from 'express';
let router = express.Router();
import CustomerManager from '../managers/customerManager';
import TransactionManager from '../managers/transactionManager';
import DiscountManager from '../managers/discountCodeManager';

const customerManager = new CustomerManager();
const transactionManager = new TransactionManager();
const discountManager = new DiscountManager();

import CustomerAPI from '../apis/customer/customer_api'
import AdminAPI from '../apis/admin/admin_api'

const managersForCustomer = 
{
    customer: customerManager,
    discount: discountManager,
    transaction: transactionManager
}

const managersForAdmin =
{
    discount: discountManager,
    transaction: transactionManager
}

const customerAPI = new CustomerAPI(managersForCustomer); 
const adminAPI = new AdminAPI(managersForAdmin);

router.route('/getDiscount').post(customerAPI.getDiscountFunction());
router.route('/setDiscount').post(adminAPI.setDiscountFunction());
router.route('/purchase').post(customerAPI.getPurchaseFunction());
router.route('/getTotalPurchaseCount').get(adminAPI.getTotalPurchaseCountFunction());
router.route('/getTotalDiscount').get(adminAPI.getTotalDiscountFunction());

module.exports = router;