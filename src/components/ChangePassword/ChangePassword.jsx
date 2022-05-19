import React, { useState } from "react";
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { smallPhone } from "../../responsive";

const ChangePassContainer = styled.div`
`;

const ChangePassForm = styled.form``;

const ChangePassFormGroup = styled.div`
    word-wrap: nowrap;
    position: relative;

    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
`;

const Label = styled.div`
    display: block;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
`;

const InputContainer = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(199, 199, 205);

    &:focus-within{
        border-bottom: 1px solid #ACBFA3;
    }
`;

const Input = styled.input`
    flex: 0 0 95%;
    width: 100%;
    padding: 1rem 0.5rem;
    border: none;
    font-family: Lato, sans-serif;

    &:focus{
        outline: none;
    }

    ${smallPhone({flex: "0 0 93%"})}
`;

const VisibilityButton = styled.button`
    flex: 0 0 5%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;

    ${smallPhone({flex: "0 0 7%"})}
`;

const SubmitButton = styled.button`
    display: block;
    background-color: #ACBFA3;
    width: 70%;
    cursor: pointer;
    color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    margin: 0 auto;
    text-transform: uppercase;
    padding: 2rem 0;
    transition: all .3s;

    &:hover{
        background-color: #b8a398;
    }

    ${smallPhone({width: "50%", padding: "1.5rem 0"})}
`;

const ChangePassword = () => {
    const [passwordVisibility, setPasswordVisibility] = useState({"currpass": false, "newpass": false, "repass": false});

    const handlePasswordVisibility = (inputName) => {
        
        setPasswordVisibility({
            ...passwordVisibility,
            [inputName]: !passwordVisibility[inputName]
        });
    };

    return (
        <ChangePassContainer>
            <ChangePassForm>
                <ChangePassFormGroup>
                    <Label for="currpass">Current Password</Label>
                    <InputContainer>
                        <Input type={passwordVisibility.currpass? "text" : "password"} id="currpass"/>
                        <VisibilityButton type="button" onClick={() => handlePasswordVisibility("currpass")}>
                            {passwordVisibility.currpass?  <VisibilityOffIcon style={{fontSize: "2.5rem", color: "#ACBFA3"}}/> : <VisibilityIcon style={{fontSize: "2.5rem", color: "#ACBFA3"}}/>}
                        </VisibilityButton>
                    </InputContainer>
                </ChangePassFormGroup>
                <ChangePassFormGroup>
                    <Label for="newpass">New Password</Label>
                    <InputContainer>
                        <Input type={passwordVisibility.newpass? "text" : "password"} id="newpass"/>
                        <VisibilityButton type="button" onClick={() => handlePasswordVisibility("newpass")}>
                        {passwordVisibility.newpass?  <VisibilityOffIcon style={{fontSize: "2.5rem", color: "#ACBFA3"}}/> : <VisibilityIcon style={{fontSize: "2.5rem", color: "#ACBFA3"}}/>}
                        </VisibilityButton>
                    </InputContainer>
                </ChangePassFormGroup>
                <ChangePassFormGroup>
                    <Label for="repass">Retype New Password</Label>
                    <InputContainer>
                        <Input type={passwordVisibility.repass? "text" : "password"} id="repass"/>
                        <VisibilityButton type="button" onClick={() => handlePasswordVisibility("repass")}>
                        {passwordVisibility.newpass?  <VisibilityOffIcon style={{fontSize: "2.5rem", color: "#ACBFA3"}}/> : <VisibilityIcon style={{fontSize: "2.5rem", color: "#ACBFA3"}}/>}
                        </VisibilityButton>
                    </InputContainer>
                </ChangePassFormGroup>
                <ChangePassFormGroup>
                    <SubmitButton>
                        Submit
                    </SubmitButton>
                </ChangePassFormGroup>
            </ChangePassForm>
        </ChangePassContainer>
    );
};



export default ChangePassword;