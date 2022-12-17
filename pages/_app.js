import { createContext, useReducer } from 'react';
import '../styles/globals.css'

import StoreProvider from "../store/store-context";

export const StoreContext = createContext();

export const ACTION_TYPES = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_COFFEE_STORES: "SET_COFFEE_STORES",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LAT_LONG: {
      return { ...state, latLong: action.payload.latLong };
    }
    case ACTION_TYPES.SET_COFFEE_STORES: {
      return { ...state, coffeeStores: action.payload.coffeeStores };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
import { ACTION_TYPES, StoreContext } from "../store/store-context";
  4 | 
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp
