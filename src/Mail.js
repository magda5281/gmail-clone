import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import {
    ArrowBack,
    CheckCircle,
    Delete,
    Email,
    MoreVert,
    MoveToInbox,
    WatchLater,
    Error,
    UnfoldMore,
    Print,
    ExitToApp,
} from "@material-ui/icons";
import LabelImportant from "@material-ui/icons/LabelImportant";

function Mail() {
    const navigate = useNavigate();
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h3>Subject</h3>
                    <LabelImportant className="mail__important" />
                    <p>Title</p>
                    <p className="mail__time">10 pm </p>
                </div>
                <div className="mail__message">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab optio pariatur
                        quibusdam esse earum! Aspernatur ab dolore architecto iste sunt? Repudiandae
                        delectus quas labore cupiditate quis doloremque, quos error qui?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Mail;
