import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/datareducer";
import profileReducer from "./reducers/userByhandle";

const middleware = [thunk];

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  devTools = a => a;
}

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  profile: profileReducer
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
   devTools
  )
);
export default store;
