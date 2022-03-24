import "./index.css";
import { LeftNav } from "../leftnav/LeftNav";
import { Board } from "../board/Board";

export const Dash = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container left-nav">
                    <LeftNav />
                </div>
                <div className="container board">
                    <Board />
                </div>
                <div className="container waves">
                    <h1>Hot Waves</h1>
                </div>
            </div>
        </>
    );
};
