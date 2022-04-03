import { POSTS_GET, POSTS_FAIL, POSTS_SUCCESS } from "../actions";

const initialState = {
    posts: [],
    isLoading: false,
    errors: "",
};

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        // Fetchers
        case POSTS_GET: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case POSTS_FAIL: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        }
        case POSTS_SUCCESS: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                errors: "",
            };
        }

        default: {
            return state;
        }
    }
};
