import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";


const LoginFormContainer = styled.form`
`;

const LoginFormGroup = styled.div`
    padding: 0 2rem;

    &:not(:last-child){
        margin-bottom: 3rem;
    }
`;

const Label = styled.label`
    display: block;
    font-size: 1.5rem;
    color: #7E8485;
`;

const Required = styled.span`
    color: red;
`;

const Input = styled.input`
    padding: 1.5rem 0rem 1rem 1rem;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #7E8485;

    &:focus{
        border-bottom: 2px solid #000;
        outline: none;
    }
`;

const Error = styled.p`
    padding: 0 2rem;
    margin-bottom: 1rem;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    color: red;
`;
const ForgotContainer = styled.div`
    padding-left: 2rem;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

const ForgotPassword = styled.a`
    display: block;
    cursor: pointer
    align-items: center;
    color: black;
    text-decoration: none;
`;

const CreateNewAccount = styled.a`
    display: block;
    cursor: pointer
    align-items: center;
    color: black;
    margin-top: 10px;
    text-decoration: none;
`;

const SubmitButton = styled.button`
    padding: 1.5rem 2.5rem;
    margin-left: ${props => props.scope === 'login'? 'none' : '2rem'};
    background-color: transparent;
    border: 2px solid #B8A398;
    text-transform: uppercase;
    color: #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #B8A398;
       color: #fff;
    }

    &:disabled{
        cursor: not-allowed
    }
`;

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();

        login(dispatch, { username, password });
    };

    return (
        <LoginFormContainer>
            <LoginFormGroup>
                <Label htmlFor="loginUsername">Username <Required>*</Required></Label>
                <Input type="text" placeholder="Userame" id="loginUsername" onChange={e => setUsername(e.target.value)}/>
            </LoginFormGroup>
            <LoginFormGroup>
                <Label htmlFor="loginpwd">Password <Required>*</Required></Label>
                <Input type="password" placeholder="Password" id="loginpwd" onChange={e => setPassword(e.target.value)}/>
            </LoginFormGroup>
            {error && <Error>{error}</Error>}
            <ForgotContainer>
                <ForgotPassword href="#">Forgot Password?</ForgotPassword>
                <CreateNewAccount href="#">Create A New Account</CreateNewAccount>
            </ForgotContainer>
            <LoginFormGroup>
                <SubmitButton scope="login" onClick={handleLogin} disabled={isFetching}>
                    Login
                </SubmitButton>
            </LoginFormGroup>
        </LoginFormContainer>
    );
};




export default LoginForm;