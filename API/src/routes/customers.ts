import { createCustomerController } from "../controllers/createCustomer";
import { getCustomerController } from "../controllers/getCustomer";
import { getCustomersController } from "../controllers/getCustomers";
import { qrcodeUserUpdateController } from "../controllers/qrcodeUserUpdate";
import { deleteUserController } from "../controllers/deleteUser";

const express  = require('express');

const router = express.Router();

console.log('customers route');

router.get('/', getCustomersController);
router.post('/', createCustomerController);
router.post('/delete/:id', deleteUserController);
router.post('/qrcode/:id', qrcodeUserUpdateController);

router.get('/:id', getCustomerController);

module.exports = router;