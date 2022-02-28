import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";

function SendEmail() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className="sendEmail">
            <div className="sendEmail__header">
                <h3>New Message</h3>
                <Close
                    onClick={() => {
                        dispatch(closeSendMessage());
                    }}
                    className=" sendEmail__close"
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    {...register("to", { required: "'To' is required" })}
                    placeholder="To"
                    type="email"
                />
                <p className="sendEmail__error">{errors.to?.message}</p>
                <input
                    name="subject"
                    {...register("subject", { required: "'Subject' is required" })}
                    placeholder="Subject"
                    type="text"
                />
                <p className="sendEmail__error">{errors.subject?.message}</p>
                <input
                    name="message"
                    {...register("message", { required: "'Message' is required" })}
                    className="sendEmail__message"
                    placeholder="Message..."
                    type="text"
                />
                {errors.message && <p className="sendEmail__error">{errors.message.message}</p>}
                <div className="sendEmail__options">
                    <Button
                        className="sendEmail__button"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendEmail;
