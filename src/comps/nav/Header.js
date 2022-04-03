import { Link } from "react-router-dom";
import styled from "styled-components";
import "./index.css";

export const Header = ({ logged }) => {
    return (
        <div className="header-wrapper">
            <h1 className="twidah">TWIDAH v0.4</h1>
            <div className="links-wrapper">
                {!logged && (
                    <>
                        <Link to="/signup">Sign Up</Link>

                        <Link to="/login">Login</Link>
                    </>
                )}
                {logged && (
                    <>
                        <Link to="/" className="only-show-mobile">
                            Profile
                        </Link>

                        <Link to="/">Dash</Link>

                        <Link to="/logout">Logout</Link>
                    </>
                )}
            </div>
        </div>
    );
};
