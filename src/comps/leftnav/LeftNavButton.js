import { Link } from "react-router-dom";

export const LeftNavButton = ({ value, to }) => {
    return (
        <>
            <Link to={to}>{value}</Link>
            <Link to={to}>{value}</Link>
            <Link to={to}>{value}</Link>
        </>
    );
};
