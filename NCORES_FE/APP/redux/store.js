import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import sign from "./modules/sign"
import photo from "./modules/photo";
import check from "./modules/check";
import cosmetics from "./modules/cosmetics";
import myPage from "./modules/myPage";
import mark from "./modules/mark";
import report from "./modules/report";
import skin from "./modules/skin";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const stack=createNativeStackNavigator()
const rootReducer = combineReducers({
  sign,
  photo,
  cosmetics,
  check,
  myPage,
  mark,
  report,
  skin,
});

const middlewares = [thunk.withExtraArgument()];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();