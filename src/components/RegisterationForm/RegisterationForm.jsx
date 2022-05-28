import React, {useState} from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import PhoneInputWithCountrySelect from 'react-phone-number-input';

const RegisterForm = styled.div`

`;

const RegisterFormGroup = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

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

const DateOfBirthContainer = styled.div`
`;

const GenderSelect = styled.select`
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

const GenderOption = styled.option`

`;

const InputContainer = styled.div`
    flex: 0 0 48%;
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
`;


const RegisterationForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [phoneNo, setPhoneNo] = useState("");

    return(
        <RegisterForm>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="name">First Name <Required>*</Required></Label>
                    <Input type="text" placeholder="e.g vivian" id="name"/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="lastname">Last Name <Required>*</Required></Label>
                    <Input type="text" placeholder="e.g smith" id="lastname"/>
                </InputContainer>
            </RegisterFormGroup>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="username">Username <Required>*</Required></Label>
                    <Input type="text" placeholder="e.g trixx" id="registerUsername"/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="email">Email <Required>*</Required></Label>
                    <Input type="email" placeholder="e.g host@server.com" id="email"/>
                </InputContainer>
            </RegisterFormGroup>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="dob">Date of Birth <Required>*</Required></Label>
                    <DateOfBirthContainer>
                        <DatePicker 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                        />
                    </DateOfBirthContainer>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="gender">Gender <Required>*</Required></Label>
                        <GenderSelect name="gender" id="gender">
                            <GenderOption value="">Select gender</GenderOption>
                            <GenderOption>Male</GenderOption>
                            <GenderOption>Female</GenderOption>
                            <GenderOption>Other</GenderOption>
                        </GenderSelect>
                </InputContainer>
            </RegisterFormGroup>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="rpwd">Password <Required>*</Required></Label>
                    <Input type="password" id="rpwd" placeholder="type password"/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="cpwd">Confirm Password <Required>*</Required></Label>
                    <Input type="password" id="cpwd" placeholder="retype password"/>
                </InputContainer>
            </RegisterFormGroup>
            <RegisterFormGroup>
                <InputContainer>
                <Label htmlFor="pwd">Phone No <Required>*</Required></Label>
                    <PhoneInputWithCountrySelect 
                        placeholder="Enter phone number" 
                        value={phoneNo}
                        onChange={setPhoneNo}
                    />
                </InputContainer>
                </RegisterFormGroup>
                <SubmitButton scope="register">
                    Register
                </SubmitButton>
            </RegisterForm>
    );
};



export default RegisterationForm;