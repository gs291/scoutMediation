import {combineReducers} from 'redux';

import {UPDATE_MOBILE, TOGGLE_DARK_MODE} from './actions';

function mobileReducer(state = false, action) {
    switch (action.type) {
        case UPDATE_MOBILE:
            return action.mobile;
        default:
            return state;
    }
}

export const initialDarkMode = {
    "darkMode": false
};
function darkModeReducer(state = initialDarkMode, action) {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return { ...state, "darkMode": !state.darkMode };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mobile: mobileReducer,
    darkMode: darkModeReducer,
});

export default rootReducer;