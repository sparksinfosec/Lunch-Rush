const express = require('express');
const router = express.Router();
const inventoryTransactionController = require('../controllers/inventoryTransactionController');

router.get('/inventoryTransactions/:locationID', inventoryTransactionController.getInventoryTransactionsByLocation);
router.get('/inventoryTransactions/incoming/:locationID/', inventoryTransactionController.getInventoryTransactionsByIncomingLocation);
router.get('/inventoryTransactions/outgoing/:locationID/:startDate/:endDate', inventoryTransactionController.getInventoryTransactionsByOutgoingLocationByDate);
router.get('/inventoryTransactions/:locationID/:startDate/:endDate', inventoryTransactionController.getInventoryTransactionsByLocationByDateRange);
router.get('/inventoryTransactions/lineItems/:inventoryTransactionID', inventoryTransactionController.getInventoryTransactionLineItemsByInventoryTransactionWithID);
router.get('/inventoryTransactions/lineItems/noID/:inventoryTransactionID', inventoryTransactionController.getInventoryTransactionLineItemsByInventoryTransaction);
router.get('/inventoryTransactions/latest/:locationID', inventoryTransactionController.getLatestInventoryTransactionByLocation);

router.post('/inventoryTransactions/', inventoryTransactionController.postInventoryTransaction);
router.post('/inventoryTransactions/lineItems', inventoryTransactionController.postInventoryTransactionLineItems);

module.exports = router;