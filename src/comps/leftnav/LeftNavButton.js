import { Link } from "react-router-dom";
import "./index.css";

export const LeftNavButton = ({ value, to }) => {
    return (
        <div className="left-nav-btn-container">
            <Link className="left-nav-btn" to={to}>
                {value}
            </Link>
        </div>
    );
};
