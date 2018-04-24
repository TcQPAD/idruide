class Database {

  constructor() {
    this._groceryLists = [];
    this.pk = 0;
    // should be a map of (pk, itemPk)
    this.itemsPks = 0;
  }

  get groceryLists() {
    return this._groceryLists;
  }

  /* Grocery list operations */
  createList(groceryList) {
    groceryList._id = this.pk++;
    this._groceryLists.push(groceryList);
    return this._groceryLists[this._groceryLists.length - 1];
  }

  getList(_id) {
    return this._groceryLists.find(t => t._id === _id);
  }

  removeList(groceryListId) {
    let groceryList = this._groceryLists.find(t => t._id === groceryListId);
    if (groceryList) {
      let index = this._groceryLists.indexOf(groceryList);
      if (index > -1) {
        this._groceryLists.splice(index, 1);
        this.pk--;
      }
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
    this.pk = 0;
    this.itemsPks = 0;
  }

  /* Grocery list item operations */
  addListItem(groceryListId, item) {
    let groceryList = this._groceryLists.find(t => t._id === groceryListId);
    if (groceryList) {
      let index = this._groceryLists.indexOf(groceryList);
      item._id = this.itemsPks++;
      this._groceryLists[index].groceryListItems.push(item);
      return this._groceryLists[index].groceryListItems[this._groceryLists[index].groceryListItems.length - 1];
    }
  }

  removeFromList(groceryListId, itemId) {
    let groceryList = this._groceryLists.find(t => t._id === groceryListId);
    if (groceryList) {
      let index = this._groceryLists.indexOf(groceryList);
      if (index > -1) {
        let item = this._groceryLists[index].groceryListItems.find(t => t._id === itemId);
        if (item) {
          let indexItem = this._groceryLists[index].groceryListItems.indexOf(item);
          if (indexItem > -1) {
            this.itemsPks--;
            this._groceryLists[index].groceryListItems.splice(indexItem, 1);
          }
        }
      }
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
