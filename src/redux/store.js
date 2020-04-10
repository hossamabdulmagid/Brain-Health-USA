import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// Redux Sagas fjrst thing

import rootReducer from './rootReducer';
// Redux Sagas second thing


const middlewares = [logger];


// how to hide action with state in console.log in deplyment app.


// if (process.env.NODE_ENV === 'development') {
   // middlewares.push(logger);
//}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// Redux Sagas three thing


export const persistor = persistStore(store);

export default { store, persistStore };