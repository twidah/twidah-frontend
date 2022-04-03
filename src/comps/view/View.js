import "./index.css";
import "../glitch.css";
import { LeftNav } from "../leftnav/LeftNav";
import { Board } from "../board/Board";

export const View = () => {
    return (
        <>
            <div className="wrapper">
                <div className=" left-nav">
                    <LeftNav />
                </div>
                <div className="container board">
                    <Board />
                </div>
                <div className="container waves">
                    <h1 className="glitch" data-text="Hot Waves">
                        Hot Waves
                    </h1>
                </div>
            </div>
        </>
    );
};
