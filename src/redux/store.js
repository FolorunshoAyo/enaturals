import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import addressReducer from "./addressRedux";
import loginRegisterModalReducer from "./login-register-modalRedux";
import productReducer from "./productRedux";
import blogReducer from "./blogRedux";
import videoReducer from "./videoRedux";
import pictureReducer from "./picturesRedux";
import reviewReducer from "./reviewRedux";
import slideReducer from "./slideRedux";

import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
  addresses: addressReducer,
  loginRegisterModal: loginRegisterModalReducer,
  blogs: blogReducer,
  videos: videoReducer,
  pictures: pictureReducer,
  reviews: reviewReducer,
  slides: slideReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
