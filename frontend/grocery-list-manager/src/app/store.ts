import {IGroceryList} from "./model/interface-grocery-list";
import {
  ADD_GROCERY_ITEM, ADD_GROCERY_LIST, REMOVE_ALL_LISTS, REMOVE_GROCERY_ITEM,
  REMOVE_GROCERY_LIST
} from "./actions";

export function rootReducer(state, action) {
  switch (action.type) {
    case ADD_GROCERY_LIST:
      action.groceryList._id = state.groceryList.length + 1;
      console.log(state.groceryList);
      return Object.assign({}, state, {
        groceryList: state.groceryList.concat(Object.assign({}, action.groceryList)),
        name: state.groceryList.name,
        lastUpdate: new Date()
      });

    case REMOVE_GROCERY_LIST:
      let groceryList = state.groceryList.find(t => t._id === action._id);
      let index = state.groceryList.indexOf(groceryList);
      return Object.assign({}, state, {
        groceryList: [
          ...state.groceryList.slice(0, index),
          ...state.groceryList.slice(index+1)
        ],
        name: "",
        lastUpdate: new Date()
      });

    case REMOVE_ALL_LISTS:
      return Object.assign({}, state, {
        groceryList: [],
        name: "",
        lastUpdate: new Date()
      });

    case ADD_GROCERY_ITEM:
      let obj = action.o;
      let g = state.groceryList.find(t => t._id === obj.parent);
      let i = state.groceryList.indexOf(g);

      const newGroceryList = {
        _id: state.groceryList[i]._id,
        name: state.groceryList[i].name,
        groceryListItems: [
          ...state.groceryList[i].groceryListItems,
          obj.item
        ]
      };

      return Object.assign({}, state, {
        groceryList: [
          ...state.groceryList.slice(0, i),
          newGroceryList,
          ...state.groceryList.slice(i+1)
        ],
        lastUpdate: new Date()
      });

    case REMOVE_GROCERY_ITEM:
      return Object.assign({}, state, {
        groceryList: [],
        name: "",
        lastUpdate: new Date()
      });
  }
  return state;
}
export interface IAppState {
  groceryList: IGroceryList[];
  name: "";
  lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
  groceryList: [],
  name: "",
  lastUpdate: null
};
