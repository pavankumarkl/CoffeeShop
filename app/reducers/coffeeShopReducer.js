import { combineReducers } from "redux";
import { jsonData } from "../itemsList";
let cloneState = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

newState = { CoffeeRequests: [] };
const initialTodos = jsonData;
function addToCartState(state = initialTodos, action) {
  console.log("Entered Cffee shop reducer", state);
  console.log("inside switch statement", action.type, action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Inside ADD_TO_CART");

      return Object.assign({}, state, action.payload);
    default:
      console.log("Inside default");
      return state;
  }
}

const coffeeState = combineReducers({
  addToCartState
});

export default coffeeState;
