import "./styles/main.scss";

import "./js/router.js";

// redux
// ======================================================/
import {appReducer} from "./redux/reducer.js";
import {createStore} from "redux";

let store = createStore(appReducer);

store.subscribe(() => 
  console.log(store.getState())
)

// store.dispatch({type: "R1"});