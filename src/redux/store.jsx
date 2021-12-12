import { useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import Reducer from "./reducerTab";
const store = createStore(Reducer);
export default store;
