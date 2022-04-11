import { PROFILE_GET, PROFILE_FAIL, PROFILE_SUCCESS } from "../actions";

const initialState = {
    profile: {},
    isLoading: false,
    errors: "",
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_GET: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case PROFILE_FAIL: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        }

        case PROFILE_SUCCESS: {
            return {
                ...state,
                profile: action.payload,
                isLoading: false,
                errors: "",
            };
        }

        default: {
            return state;
        }
    }
};
