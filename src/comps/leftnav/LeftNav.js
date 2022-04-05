import { LeftNavButton } from "./LeftNavButton";
import "./index.css";

export const LeftNav = () => {
    return (
        <>
            <LeftNavButton to={"/"} value={"Dash"} />
            <LeftNavButton to={"/profile"} value={"Profile"} />
            <LeftNavButton to={"/"} value={"Post"} />
        </>
    );
};
