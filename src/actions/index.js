// Posts
export const POSTS_GET = "POSTS_GET";
export const POSTS_FAIL = "POSTS_FAIL";
export const POSTS_SUCCESS = "POSTS_SUCCESS";

export const postsGet = () => {
    return { type: POSTS_GET };
};
export const postsFail = (error) => {
    return { type: POSTS_FAIL, payload: error };
};
export const postsSuccess = (data) => {
    return { type: POSTS_SUCCESS, payload: data };
};
