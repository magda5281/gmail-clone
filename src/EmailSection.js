import React from "react";

function EmailSection({ Icon, title, color, selected }) {
    return (
        <div
            className={`emailSection ${selected && "emailSection--selected"}`}
            style={{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`,
            }}
        >
            <Icon />
            <h4>{title}</h4>
        </div>
    );
}

export default EmailSection;
