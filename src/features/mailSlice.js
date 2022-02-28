import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        sendMessageIsOpened: false,
    },

    reducers: {
        openSendMessage: (state) => {
            state.sendMessageIsOpened = true;
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpened = false;
        },
    },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpened = (state) => state.mail.sendMessageIsOpened;

export default mailSlice.reducer;
