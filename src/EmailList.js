import React from "react";

import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
    ChevronLeft,
    ChevronRight,
    KeyboardHide,
    Settings,
    People,
    Inbox,
    LocalOffer,
} from "@material-ui/icons";
import EmailSection from "./EmailSection";

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <EmailSection Icon={Inbox} title="Primary" color="red" selected={true} />
                <EmailSection Icon={People} title="Social" color="#1a73e8" />
                <EmailSection Icon={LocalOffer} title="Promotions" color="green" />
            </div>
        </div>
    );
}

export default EmailList;
