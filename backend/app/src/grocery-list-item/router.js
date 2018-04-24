/**
 * Defines the endpoints associated to the grocery-list items
 * operations
 */
const endPoint = '/grocery-list-items';

let log = require('bole')('grocery-list-items/router');
let groceryListModel = require('./grocery-list-item-model');
let router = require('express').Router();


/**
 * Adds a new grocery list item to the database,
 * attached to the given grocery list
 */
const addGroceryListItem = async (req, res) => {
  log.info('Received POST request for ', endPoint);
  if (!req || !req.body || !req.body.parent || !req.body.groceryListItem) {
    log.error('Invalid request or missing properties parent and or groceryListItem in request');
    res.status(400).send({error: 'Invalid request or missing properties parent and or groceryListItem in request'});
  }
  else {
    groceryListModel.addGroceryList(parseInt(req.body.parent, 10), req.body.groceryListItem);
    log.info('Successfully inserted new GroceryList item entry to the database');
    res.status(200).send({success: 'Successfully inserted new GroceryList item entry to the database'});
  }
};

/**
 * Adds a new grocery list item to the database,
 * attached to the given grocery list
 */
const removeGroceryListItem = async (req, res) => {
  log.info('Received DELETE request for ', endPoint);
  if (!req || !req.body || !req.body.parent || !req.body.groceryListItem) {
    log.error('Invalid request or missing properties parent and or groceryListItem in request');
    res.status(400).send({error: 'Invalid request or missing properties parent and or groceryListItem in request'});
  }
  else {
    groceryListModel.removeGroceryItem(parseInt(req.body.parent, 10), req.body.groceryListItem);
    log.info('Successfully deleted item from GroceryList');
    res.status(200).send({success: 'Successfully deleted item from GroceryList'});
  }
};

router.post('/post', addGroceryListItem);
router.delete('/delete', removeGroceryListItem);


module.exports = router;
