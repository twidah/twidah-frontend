// Posts Actions
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

// Profile Actions
export const PROFILE_GET = "PROFILE_GET";
export const PROFILE_FAIL = "PROFILE_FAIL";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";

export const profileGet = () => {
    return { type: PROFILE_GET };
};
export const profileFail = (error) => {
    return { type: PROFILE_FAIL, payload: error };
};
export const profileSuccess = (profile) => {
    return { type: PROFILE_SUCCESS, payload: profile };
};
