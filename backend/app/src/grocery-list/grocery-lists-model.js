"use strict";

let database = require('../database/database');

/**
 * Finds all the grocery lists in the database
 * The promise object simulates that the call to the database is asynchronous
 */
const findAll = () => {
  return new Promise(resolve => {
    setImmediate(() => {
      resolve(database.groceryLists);
    });
  });
};

/**
 * Finds a grocery list by its id in the database
 */
const findById = (_id) => {
  return new Promise(resolve => {
    setImmediate(() => {
      resolve(database.getList(_id));
    });
  });
};

/**
 * Adds a new grocery list into the database
 */
const addGroceryList = (groceryList) => {
  database.createList(groceryList)
};

const removeGroceryList = (groceryListId) => {
  database.removeList(groceryListId);
};

const removeAll = () => {
  database.removeAll();
};

exports.findAll = findAll;
exports.addGroceryList = addGroceryList;
exports.findById = findById;
exports.removeGroceryList = removeGroceryList;
exports.removeAll = removeAll;
