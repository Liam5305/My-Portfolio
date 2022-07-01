import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "50ch"
        }
    }
}));

function ContactPageText() {

    const classes = useStyles();

    const [email, setEmail] = useState("");

    const [yourName, setYourName] = useState("");

    const [subject, setSubject] = useState("");

    const [message, setMessage] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);

    const [showErrors, setShowErrors] = useState(false);

    let errors = [];
    function ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    const formValidation = () => {
        setErrorMessages([]);

        const isNameValid = yourName !== "";
        const isMessageValid = message !== "";
        const isSubjectValid = subject !== "";

        if (!isNameValid) {
            errors.push("Name is not valid, please try again.");
        }
        if (!ValidateEmail(email)) {
            errors.push("Email is not valid, please try again.");
        }
        if (email === "") {
            errors.push("Email field is Empty, please try again");
        }
        if (!isMessageValid) {
            errors.push("Message is not valid, please try again.");
        }
        if (!isSubjectValid) {
            errors.push("Subject is not valid, please try again.");
        }
        if (errors.length > 0) {
            setShowErrors({ showErrors: true });
            setErrorMessages(errors);
        } else {
            setShowErrors({ showErrors: false });
            alert("Email Sent");
        }
    };

    return (
        <>
            <div className="container">
                <div className="outerFormContainer">
                    <div className="innerFormContainer">
                        <h2>Get in Touch!</h2>
                        <form className={classes.root}>
                            <TextField 
                            label="Name"
                            placeholder="John Doe" 
                            type="text"
                            variant="outlined" 
                            onChange={e => setYourName({ yourName: e.target.value })} 
                            />
                            <TextField 
                            label="Email"
                            placeholder="johndoe@gmail.com" 
                            type="email"
                            variant="outlined" 
                            onChange={e => setEmail({ email: e.target.value })} 
                            />
                            <TextField 
                            label="Subject"
                            placeholder="Hey, how are ya?" 
                            type="text"
                            variant="outlined"  
                            onChange={e => setSubject({ subject: e.target.value })} 
                            />
                            <TextField 
                            label="Message"
                            placeholder="Can you help me with ..?" 
                            type="text"
                            variant="outlined"
                            multiline
                            rowsMax="3"  
                            onChange={e => setMessage({ message: e.target.value })} 
                            />
                            {showErrors
                            ? errorMessages.map((item, index) => {
                                return <ul key={index}>{item}</ul>
                            })
                        : null}
                            <Button
                            variant="contained" 
                            color="primary" 
                            type="button"
                            onClick={formValidation}
                            >
                                Send!
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPageText;