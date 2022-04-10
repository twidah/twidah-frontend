import { axiosWithAuth } from "../comps/AxiosWithAuth";
import { ProfileConfig } from "../config/api";

import { profileGet, profileFail, profileSuccess } from "./index";

export const FetchProfile = () => (dispatch) => {
    dispatch(profileGet());
    axiosWithAuth()
        .get(`${ProfileConfig}`)
        .then((res) => {
            dispatch(profileSuccess(res.data));
        })
        .catch((err) => dispatch(profileFail(err)));
};
