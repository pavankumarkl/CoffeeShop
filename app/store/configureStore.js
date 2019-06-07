/*A store holds the whole state tree of your application.
The only way to change the state inside it is to dispatch an action on it.
A store is not a class. It's just an object with a few methods on it.
To create it, pass your root reducing function to createStore.

State (also called the state tree) is a broad term, but in the Redux API it usually refers to
the single state value that is managed by the store and returned by getState().
It represents the entire state of a Redux application, which is often a deeply nested object.

By convention, the top-level state is an object or some other key-value collection like a Map,
but technically it can be any type. Still, you should do your best to keep the state serializable.
Don't put anything inside it that you can't easily turn into JSON.*/

import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore () {
  console.log("Inside configureStore")
  console.log(rootReducer);
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  console.log("Store : ");
  console.log(store)

/*To enable Hot Reloading on Redux stores in React Native,
we will just need to use the HMR API similarly to what you’d do on a web project that uses Webpack*/
if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
