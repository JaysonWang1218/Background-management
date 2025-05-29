import {configureStore} from '@reduxjs/toolkit';
import TabReducer from './reducers/tab.jsx';
import { tab } from '@testing-library/user-event/dist/tab';
configureStore({
    reducer:{
        tab:TabReducer
    }
})