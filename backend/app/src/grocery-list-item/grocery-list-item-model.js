"use strict";

let database = require('../database/database');

/**
 * Adds a new grocery list into the database
 */
const addGroceryList = (parent, groceryListItem) => {
  return database.addListItem(parent, groceryListItem);
};

const removeGroceryItem = (parent, groceryListItem) => {
  database.removeFromList(parent, groceryListItem);
};

exports.addGroceryList = addGroceryList;
exports.removeGroceryItem = removeGroceryItem;
