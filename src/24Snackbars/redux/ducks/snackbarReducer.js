export const SET_SNACKBAR = "teamly/settings/SET_SNACKBAR";

const initialState = {
    snackbarOpen: false,
    snackbarType: "success",
    snackbarMessage: "",
};

export const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SNACKBAR:
            const {snackbarOpen, snackbarType, snackbarMessage} = action;
            return {
                ...state,
                snackbarOpen,
                snackbarType,
                snackbarMessage,
            };

        default:
            return state;
    }
};

export const setSnackbar = (snackbarOpen, snackbarType, snackbarMessage) => ({
    type: SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage,
})