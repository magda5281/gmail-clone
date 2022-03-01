import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        sendMessageIsOpened: false,
        selectedEmail: null,
    },

    reducers: {
        selectEmail: (state, action) => {
            state.selectedEmail = action.payload;
        },
        openSendMessage: (state) => {
            state.sendMessageIsOpened = true;
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpened = false;
        },
    },
});

export const { selectEmail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenEmail = (state) => state.mail.selectedEmail;
export const selectSendMessageIsOpened = (state) => state.mail.sendMessageIsOpened;

export default mailSlice.reducer;
