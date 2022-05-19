import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomerDetailsEdit.css";
import { res480 } from "../../responsive";

const CustomerDetailsEditContainer = styled.div``;

const CustomerDetailsEditForm = styled.form``;

const FullNameInputs = styled.div`
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${res480({marginBottom: "1rem", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch"})}
`;

const CustomerDetailsFormGroup = styled.div`
    flex: 0 0 48%;
    display: flex;
    flex-direction: column;

    ${res480({width: "100%", flex: "initial", marginBottom: "2rem"})}
`;

const Label = styled.label`
    color: #75757A;
    margin-bottom: 5px;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid rgb(199, 199, 205);
    padding: 0.5rem 0.5rem;
    font-family: Lato, sans-serif;
    color: #282828;
    font-size: 1.5rem;

    &:focus{
        outline: none;
        border-bottom: 1px solid #ACBFA3;
    }
`;

const Email = styled.p`
    color: #232323;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;

    ${res480({fontSize: "2rem"})}
`;

const Username = styled(Email)``;

const EmailAndPhoneInputs = styled(FullNameInputs)``;

const PhoneNoContainer = styled.div`
    width: 100%;
    display: flex;
`;

const PrefixContainer = styled.div`
    flex: 0 0 15%;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PrefixLabel = styled.span`
    color: #75757A;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    margin-bottom: 5px;
`;

const Prefix = styled.div`
    color: #282828;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
`;

const PhoneNo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const GenderAndBirthdayInputs = styled(FullNameInputs)``; 

const GenderSelect = styled.select` 
    border: none;
    border-bottom: 1px solid rgb(199, 199, 205);
    padding: 0.5rem 0.5rem;
    font-family: Lato, sans-serif;
    color: #282828;
`;

const GenderOption = styled.option``;

const DateOfBirthContainer = styled.div`
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SaveButtonContainer = styled.div`
    margin-top: 3rem;
`;

const SaveButton = styled.button`
    background-color: #ACBFA3;
    width: 100%;
    cursor: pointer;
    color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    text-transform: uppercase;
    padding: 2rem 0;
    transition: all .3s;

    &:hover{
        background-color: #b8a398;
    }

    ${res480({padding: "1.5rem 0", })}
`;

const CustomerDetailsEdit = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <CustomerDetailsEditContainer>
            <CustomerDetailsEditForm>
                <FullNameInputs>
                    <CustomerDetailsFormGroup>
                        <Label for="fname">First Name</Label>
                        <Input type="text" value="Folorunsho" id="fname"/>
                    </CustomerDetailsFormGroup>
                    <CustomerDetailsFormGroup>
                        <Label for="lname">Last Name</Label>
                        <Input type="text" value="Shodiya" id="lname"/>
                    </CustomerDetailsFormGroup>
                </FullNameInputs>
                <EmailAndPhoneInputs>
                    <CustomerDetailsFormGroup>
                        <Label>E-mail</Label>
                        <Email>folushoayomide11@gmail.com</Email>
                    </CustomerDetailsFormGroup>
                    <CustomerDetailsFormGroup>
                        <Label> Username </Label>
                        <Username>folumania</Username>
                    </CustomerDetailsFormGroup>
                </EmailAndPhoneInputs>
                <GenderAndBirthdayInputs>
                    <CustomerDetailsFormGroup>
                        <Label>Gender</Label>
                        <GenderSelect>
                            <GenderOption>Male</GenderOption>
                            <GenderOption>Female</GenderOption>
                            <GenderOption>Other</GenderOption>
                        </GenderSelect>
                    </CustomerDetailsFormGroup>
                    <CustomerDetailsFormGroup>
                        <PhoneNoContainer>
                            <PrefixContainer>
                                <PrefixLabel>
                                    Prefix
                                </PrefixLabel>
                                <Prefix>+234</Prefix>
                            </PrefixContainer>
                            <PhoneNo>
                                <Label>
                                    Phone Number 
                                </Label>
                                <Input type="text" value="7087857141" />
                            </PhoneNo>
                        </PhoneNoContainer>
                    </CustomerDetailsFormGroup>
                </GenderAndBirthdayInputs>
                <DateOfBirthContainer>
                    <CustomerDetailsFormGroup>
                        <Label>Date of Birth</Label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="customerEditDate"/>
                    </CustomerDetailsFormGroup>
                </DateOfBirthContainer>
                <SaveButtonContainer>
                    <SaveButton>
                        Save
                    </SaveButton>
                </SaveButtonContainer>
            </CustomerDetailsEditForm>
        </CustomerDetailsEditContainer>
    )
};


export default CustomerDetailsEdit;