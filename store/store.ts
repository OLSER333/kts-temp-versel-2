import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import CartSlice from './cartSlice';
import ModalsSlice from "./modalsSlice";

const persistConfig = {
  key: 'cart',
  storage,
}

const persistedReducer = persistReducer(persistConfig, CartSlice);

const rootReducer = combineReducers({
  cart: persistedReducer,
  modals: ModalsSlice,
});




const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }),
})

export const persistor = persistStore(store);
export default store;

type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector