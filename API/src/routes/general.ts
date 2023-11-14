import { loginCustomerController } from "../controllers/general/loginCustomer";

const express  = require('express');

const router = express.Router();

console.log('general route');

router.post('/login', loginCustomerController);

module.exports = router;