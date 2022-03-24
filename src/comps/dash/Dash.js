import "./index.css";
import { LeftNav } from "../leftnav/LeftNav";

export const Dash = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container left-nav">
                    <LeftNav />
                </div>
                <div className="container feed">
                    <h1>Feed</h1>
                </div>
                <div className="container waves">
                    <h1>Waves</h1>
                </div>
            </div>
        </>
    );
};
