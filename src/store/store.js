import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import { rootReducers } from './root.reducer';

const middleWares =[logger]
const composedMiddleWare  = compose (applyMiddleware(...middleWares))

export const store=createStore(rootReducers,undefined,composedMiddleWare);

