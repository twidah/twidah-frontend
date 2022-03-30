import {
    FETCH_START,
    FETCH_FAIL,
    FETCH_SUCCESS,
    ADD_POST,
    GET_POSTS,
    DELETE_POST,
} from "../actions";

const initialState = {
    posts: [],
    isLoading: false,
    errors: "",
};

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        // Fetchers
        case FETCH_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case FETCH_FAIL: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                errors: "",
            };
        }

        // Posts
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case GET_POSTS: {
            return {
                ...state,
            };
        }
        case DELETE_POST: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
};
