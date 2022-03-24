import "./index.css";
import { LeftNav } from "../leftnav/LeftNav";

export const Dash = () => {
    return (
        <>
            <div className="wrapper">
                <div className="left-nav container">
                    <LeftNav />
                </div>
                <div className="container">
                    <h1>Feed Component</h1>
                </div>
                <div className="container">
                    <h1>Notify Nav</h1>
                </div>
            </div>
        </>
    );
};
