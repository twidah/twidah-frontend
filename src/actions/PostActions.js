import { axiosWithAuth } from "../comps/AxiosWithAuth";
import { TwootPostConfig } from "../config/api";

import {
    fetchStart,
    fetchFail,
    fetchSuccess,
    // GET_POST,
    // ADD_POST,
    // DELETE_POST,
} from "./index";

export const FetchPosts = () => (dispatch) => {
    dispatch(fetchStart());
    axiosWithAuth()
        .get(`${TwootPostConfig}`)
        .then((res) => {
            dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
            dispatch(fetchFail(err.message));
        });
};
