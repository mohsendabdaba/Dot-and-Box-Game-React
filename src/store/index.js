import { createStore } from "redux";
import reducers from "reducers";

function reducers(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}

export default reducers;