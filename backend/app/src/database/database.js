class Database {

  constructor() {
    this._groceryLists = [];
  }

  get groceryLists() {
    return this._groceryLists;
  }

  /* Grocery list operations */
  createList(groceryList) {
    this._groceryLists.push(groceryList);
  }

  getList(_id) {
    return this._groceryLists.find(t => t._id === _id);
  }

  removeList(groceryList) {
    if (!this._groceryLists.includes(groceryList))
      return;

    this._groceryLists.remove(groceryList);
  }

  updateList(groceryList) {
    for (let g in this._groceryLists) {
      if (g._id === groceryList._id) {
        g = groceryList;
        break;
      }
    }
  }

  removeAll() {
    this._groceryLists = [];
  }

  /* Grocery list item operations */
  addListItem(groceryList, item) {
    // if the list doesn't exist
    if (!this._groceryLists.includes(groceryList))
      return;

    if (this._groceryLists[groceryList].groceryListItems.includes(item))
      return;

    this._groceryLists[groceryList].groceryListItems.push(item);
  }

  removeFromList(groceryList, item) {
    // if the list doesn't exist
    if (!this._groceryLists.includes(groceryList))
      return;

    if (!this._groceryLists[groceryList].groceryListItems.includes(item))
      return;

    this._groceryLists[groceryList].groceryListItems.remove(item);
  }

  updateListItem(groceryList, item) {
    // if the list doesn't exist
    if (!this._groceryLists.includes(groceryList))
      return;

    for (let i in this._groceryLists[groceryList].groceryListItems) {
      if (i._id === item._id) {
        i = item;
        break;
      }
    }
  }
}

let database = new Database();
module.exports = database;
