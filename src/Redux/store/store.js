import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

// reducer: rootReducer, = adalah kita  menggunakan kumpulan reducer pada combine reducer

export default configureStore({
  // ember ember yang kita simpan
  reducer: rootReducer,

  // kalian sudah menggunakan redux thunk untuk menjadi middleware
  middleware: (getMiddleware) => getMiddleware().concat(thunk),
});
