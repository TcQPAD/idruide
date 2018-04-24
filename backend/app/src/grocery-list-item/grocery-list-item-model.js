"use strict";

let database = require('../database/database');

/**
 * Adds a new grocery list into the database
 */
const addGroceryList = (parent, groceryListItem) => {
  database.addListItem(parent, groceryListItem);
};

exports.addGroceryList = addGroceryList;
