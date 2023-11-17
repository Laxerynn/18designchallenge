import { createStallingController } from "../controllers/stalling/createStalling";
import { getStallingController } from "../controllers/stalling/getStalling";
import { getStallingsController } from "../controllers/stalling/getStallings";

const express  = require('express');

const router = express.Router();

console.log('stalling route');

router.get('/:qrcode', getStallingController);
router.get('/', getStallingsController);
router.post('/', createStallingController);

module.exports = router;