import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



import loginReducer from './apps/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    products: loginReducer,
    // devTools: process.env.NODE_ENV !== 'production',
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;