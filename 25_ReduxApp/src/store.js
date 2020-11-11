const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

import rootReducer from "./reducer/index"

// const middleware = [thunk]
// import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(...middleware))
) 

export default store;