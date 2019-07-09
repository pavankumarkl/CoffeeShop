import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore() {
  console.log("Inside configureStore");
  console.log(rootReducer);
  const store = createStore(rootReducer, applyMiddleware(thunk));
  console.log("Store : ");
  console.log(store);

  /*To enable Hot Reloading on Redux stores in React Native,
we will just need to use the HMR API similarly to what you’d do on a web project that uses Webpack*/
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
