import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
    return (
        <div style={{ width: "85%" }}>
            <p className="lead mb-1 mt-2">{skill}</p>
            {isScrolled && (
                <ProgressBar
                    className={
                        !isScrolled ? "progress" : " progress-bar-animation"
                    }
                    now={value}
                />
            )}
        </div>
    );
}

export default SkillsBar;
