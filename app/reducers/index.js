/*This is the root reducer. We will then use combineReducers in our root reducer
to wrap our reducer. This way if we have any future data we would like redux to handle,
it will already be set up for us, all we will have to do is add another reducer and import it
into our root reducer*/

import { combineReducers } from "redux";
import coffeeShopReducer from "./coffeeShopReducer";

const appReducer = combineReducers({
  coffeeShopReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
