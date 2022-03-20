import React, { useState } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { medPhone, res1023, res480, smallPhone, bigDesktop } from '../responsive';


const LoginContainer = styled.div`
    height: 100vh;
    background: hsla(0, 0%, 100%, 1);
    background: linear-gradient(135deg, hsla(0, 0%, 100%, 1) 0%, hsla(101, 18%, 69%, 1) 100%);
    position: relative;
    background-color: #f2eeec;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

const LoginBox = styled.div`
    flex: 0 0 45%; 
    background-color: #fff;
    border-radius: 10px;
    padding: 1.5rem 3rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    ${res1023({flex: "0 0 60%"})}
    ${medPhone({flex: "0 0 70%"})}
    ${res480({flex: "0 0 80%"})}
    ${bigDesktop({flex: "0 0 750px"})}
`;

const Title = styled.h2`
    text-align: center;
    font-size: 3rem;
    color: #7E8485;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 600;
`;

const LoginForm = styled.form`

`;

const LoginFormGroup = styled.div`

    &:not(:last-child){
        margin-bottom: 20px;
    }
`; 

const LoginLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #4b5354;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    font-weight: 400;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 20px; 
    border-radius: 10px;
    border: 1px solid #acbfa3;
    font-family: Lato, sans-serif;
    transition: all .5s ease;

    &:focus{
        outline: none;
    }
`;

const PasswordContainer = styled.div`
    width: 100%;
    height: 40px;
    overflow: hidden;
    display: flex;
    border-radius: 10px;
    border: 1px solid #acbfa3;
    transition: all .5s ease;
`;

const PasswordInput = styled.input`
    flex: 0 0 90%;
    height: 100%;
    padding: 8px 16px; 
    border: none;
    font-family: Lato, sans-serif;

    &:focus{
        outline: none;
    }

    ${smallPhone({flex: "0 0 80%", padding: "4px 8px"})}
`;


const IconContainer = styled.div`
    flex: 0 0 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #acbfa3;

    ${smallPhone({flex: "0 0 20%"})}
`;

const SubmitBtnContainer = styled.div`
    text-align: end;
    margin-top: 20px;
`;

const LoginBtn = styled.button`
    padding: 1.5rem 3rem;
    border: 2px solid #acbfa3;
    color: #acbfa3;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: transparent;
    transition: all .5s ease;
    cursor: pointer;
    font-size: 1.5rem;

    &:hover{
        background-color: #acbfa3;
        color: #fff;
    }
`;

const AdminLogin = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handlePasswordState = () => {
        console.log(passwordVisibility);
        setPasswordVisibility(!passwordVisibility);
    }

    return(
        <LoginContainer>
            <LoginBox>
                <Title>Admin Login</Title>
                <LoginForm>
                    <LoginFormGroup>
                        <LoginLabel htmlFor="username">Username</LoginLabel>
                        <Input type="text" id="username" placeholder="e.g Trixx..." />
                    </LoginFormGroup>
                    <LoginFormGroup>
                        <LoginLabel htmlFor="pwd">Password</LoginLabel>
                        <PasswordContainer>
                            <PasswordInput type={passwordVisibility? "text" : "password"} id="pwd" placeholder="Enter password..."/>
                            <IconContainer>
                                {
                                    passwordVisibility? 
                                    <VisibilityOffIcon style={{fontSize: 20, cursor: "pointer"}} onClick={handlePasswordState}/> 
                                    : 
                                    <VisibilityIcon style={{fontSize: 20, cursor: "pointer"}} onClick={handlePasswordState}/>
                                }
                            </IconContainer>
                        </PasswordContainer>
                    </LoginFormGroup>
                    <SubmitBtnContainer>
                        <LoginBtn type="submit">Login</LoginBtn>
                    </SubmitBtnContainer>
                </LoginForm>
            </LoginBox>
        </LoginContainer>
    );
};



export default AdminLogin;