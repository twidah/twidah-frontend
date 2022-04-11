import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import { ProfileReducer } from "./ProfileReducer";

const rootReducer = combineReducers({
    posts: PostReducer,
    profile: ProfileReducer,
});

export default rootReducer;
