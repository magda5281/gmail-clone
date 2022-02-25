import React from "react";

function SidebarOption({ Icon, title, numbers, selected }) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon />
            <h2>{title}</h2>
            <p>{numbers}</p>
        </div>
    );
}

export default SidebarOption;
