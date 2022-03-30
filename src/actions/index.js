// Fetchers
export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchStart = () => {
    return { type: FETCH_START };
};
export const fetchFail = (error) => {
    return { type: FETCH_FAIL, payload: error };
};
export const fetchSuccess = (data) => {
    return { type: FETCH_SUCCESS, payload: data };
};

// Posts
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
