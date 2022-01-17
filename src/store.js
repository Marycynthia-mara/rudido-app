import { createStore ,compose, combineReducers ,applyMiddleware} from "redux";
import { userAccountReducer}  from "./reducers";
import thunk from "redux-thunk";
import { isEmpty } from "./utils";



const initialState  = {
    user : !isEmpty(localStorage.getItem("userData"))? JSON.parse(localStorage.getItem("userData")) :  {},
};

const reducers = combineReducers({
    userDetails:userAccountReducer
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,initialState,storeEnhancers(applyMiddleware(thunk)));
export default store;