import { createCustomerController } from "../controllers/customers/createCustomer";
import { loginCustomerController } from "../controllers/general/loginCustomer";
import { createStallingController } from "../controllers/stalling/createStalling";

const express  = require('express');

const router = express.Router();

console.log('general route');

router.post('/login', loginCustomerController);
router.post('/register', createCustomerController);

module.exports = router;