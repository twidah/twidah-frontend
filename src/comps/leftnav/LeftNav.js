import { LeftNavButton } from "./LeftNavButton";
import "./index.css";

export const LeftNav = ({ profile }) => {
    return (
        <>
            <LeftNavButton to={"/"} value={"Dash"} />
            <LeftNavButton to={`/${profile.username}`} value={"Profile"} />
            <LeftNavButton to={"/"} value={"Post"} />
        </>
    );
};
