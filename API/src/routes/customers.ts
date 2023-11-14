import { createCustomerController } from "../controllers/customers/createCustomer";
import { getCustomerController } from "../controllers/customers/getCustomer";
import { getCustomersController } from "../controllers/customers/getCustomers";
import { qrcodeUserUpdateController } from "../controllers/customers/qrcodeUserUpdate";
import { deleteUserController } from "../controllers/customers/deleteUser";
import { loginCustomerController } from "../controllers/general/loginCustomer";

const express  = require('express');

const router = express.Router();

console.log('customers route');

router.get('/', getCustomersController);

router.post('/', createCustomerController);
router.post('/delete/:id', deleteUserController);
router.post('/qrcode/:id', qrcodeUserUpdateController);

router.get('/login/:id', loginCustomerController);
router.get('/:id', getCustomerController);

module.exports = router;