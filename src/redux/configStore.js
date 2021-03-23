import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./Reducers/gioHangReducer";
const rootReducer = combineReducers({
  //Nơi chứa toàn bộ state của ứng dụng
  gioHangReducer: gioHangReducer,
});
export const store = createStore(rootReducer);
