import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/datareducer";
import profileReducer from "./reducers/userByhandle";

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  profile: profileReducer
});

const store = createStore(reducers, compose(applyMiddleware(...middleware)));
export default store;
