import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { userAccountReducer } from "./reducers";
import { isEmpty } from "./utils";
import thunk from "redux-thunk";

const initialState = {
  user: !isEmpty(localStorage.getItem("userData"))
    ? {
        ...JSON.parse(localStorage.getItem("userData")),
        loading: false,
        type: "login",
        message: "",
        isSignedIn: true,
      }
    : { loading: false, message: "" },
};

const reducers = combineReducers({
  user: userAccountReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  storeEnhancers(applyMiddleware(thunk))
);
export default store;
