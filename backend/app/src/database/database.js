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

  removeList(groceryListId) {
    let groceryList = this._groceryLists.find(t => t._id = groceryListId);
    if (groceryList) {
      let index = this._groceryLists.indexOf(groceryList);
      if (index > -1)
        this._groceryLists.splice(index, 1);
    }
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
  addListItem(groceryListId, item) {
    let groceryList = this._groceryLists.find(t => t._id = groceryListId);
    if (groceryList) {
      let index = this._groceryLists.indexOf(groceryList);
      this._groceryLists[index].groceryListItems.push(item);
    }
  }

  removeFromList(groceryListId, item) {
    let groceryList = this._groceryLists.find(t => t._id = groceryListId);
    if (groceryList) {
      let index = this._groceryLists.indexOf(groceryList);
      if (index > -1)
        this._groceryLists[index].groceryListItems.splice(index, 1);
    }
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
