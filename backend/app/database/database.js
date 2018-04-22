class Database {

  private groceryLists;


  constructor() {
    this._groceryLists = [];
  }

  get groceryLists() {
    return this._groceryLists;
  }

  /* Grocery list operations */
  public createList(groceryList) {
    this.groceryLists.push(groceryList);
  }

  public removeList(groceryList) {
    if (!this.groceryLists.includes(groceryList))
      return;

    this.groceryLists.remove(groceryList);
  }

  public updateList(groceryList) {
    for (let g in this.groceryLists) {
      if (g._id === groceryList._id) {
        g = groceryList;
        break;
      }
    }
  }

  public removeAll() {
    this.groceryLists = [];
  }

  /* Grocery list item operations */
  public addListItem(groceryList, item) {
    // if the list doesn't exist
    if (!this.groceryLists.includes(groceryList))
      return;

    if (this.groceryLists[groceryList].items.includes(item))
      return;

    this.groceryLists[groceryList].items.push(item);
  }

  public removeFromList(groceryList, item) {
    // if the list doesn't exist
    if (!this.groceryLists.includes(groceryList))
      return;

    if (!this.groceryLists[groceryList].items.includes(item))
      return;

    this.groceryLists[groceryList].items.remove(item);
  }

  public updateListItem(groceryList, item) {
    // if the list doesn't exist
    if (!this.groceryLists.includes(groceryList))
      return;

    for (let i in this.groceryLists[groceryList].items) {
      if (i._id === item._id) {
        i = item;
        break;
      }
    }
  }
}

let database = new Database();
module.exports = database;
