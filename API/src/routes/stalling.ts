import { createStallingController } from "../controllers/stalling/createStalling";
import { getStallingController } from "../controllers/stalling/getStalling";
import { getStallingsController } from "../controllers/stalling/getStallings";
import { updateOpenController } from "../controllers/stalling/updateOpen";
import { updateScannedController } from "../controllers/stalling/updateScanned";
import { removeStallingUserController } from "../controllers/stalling/removeStallingUser";

const express  = require('express');

const router = express.Router();

console.log('stalling route');

router.get('/:qrcode', getStallingController);
router.get('/', getStallingsController);
router.post('/', createStallingController);
router.post('/scanned/:id', updateScannedController);
router.post('/open/:id', updateOpenController);
router.post('/close/:id', removeStallingUserController)

module.exports = router;