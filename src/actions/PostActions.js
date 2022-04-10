import { axiosWithAuth } from "../comps/AxiosWithAuth";
import { TwootPostConfig } from "../config/api";

import { postsGet, postsFail, postsSuccess } from "./index";

export const FetchPosts = () => (dispatch) => {
    dispatch(postsGet());
    axiosWithAuth()
        .get(`${TwootPostConfig}`)
        .then((res) => {
            dispatch(postsSuccess(res.data));
        })
        .catch((err) => dispatch(postsFail(err.message)));
};
