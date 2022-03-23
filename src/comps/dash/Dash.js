import "./index.css";
import { LeftNav } from "../leftnav/LeftNav";

export const Dash = () => {
    return (
        <>
            <div className="wrapper">
                <div>
                    <LeftNav />
                </div>
                <div>
                    <h1>Feed Component</h1>
                </div>
                <div>
                    <h1>Notify Nav</h1>
                </div>
            </div>
        </>
    );
};
