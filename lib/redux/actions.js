export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const UPDATE_MOBILE = 'UPDATE_MOBILE';

export function toggleDarkMode() {
    return {type: TOGGLE_DARK_MODE};
}

export function updateMobile(mobile) {
    return {type: UPDATE_MOBILE, mobile};
}
