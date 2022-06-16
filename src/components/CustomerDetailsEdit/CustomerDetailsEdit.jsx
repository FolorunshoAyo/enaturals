import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import "react-datepicker/dist/react-datepicker.css";
import "./CustomerDetailsEdit.css";
import { res480 } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUser } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

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

const UserInputError = styled.div`
    font-family: Lato, sans-serif;
    font-size: 1.2rem;
    color: red;
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

    &:disabled{
        cursor: not-allowed;
    }

    ${res480({padding: "1.5rem 0", })}
`;

const CustomerDetailsEdit = () => {
    const {currentUser, isFetching} = useSelector(state => state.user);
    const [dateOfBirth, setDateOfBirth] = useState(new Date(currentUser.dob === ""? "" : currentUser.dob));
    const [phoneNo, setPhoneNo] = useState(currentUser.phoneno);
    const [phoneErr, setPhoneErr] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            firstname: currentUser.firstname,
            lastname: currentUser.lastname,
            gender: currentUser.gender,
        }
    });

    const onSubmit = (data) => {
        if(phoneNo === ""){
            setPhoneErr("Please input a phone number");
            return;
        }else{
            setPhoneErr("");
            
            updateUser(currentUser._id, {...data, phoneno: phoneNo, dob: dateOfBirth.toISOString().substring(0, 10)}, dispatch);
            setTimeout(() => {
                navigate("/customer/account");
            }, 3000);
        }
    }; 

    return (
        <CustomerDetailsEditContainer>
            <CustomerDetailsEditForm onSubmit={handleSubmit(onSubmit)}>
                <FullNameInputs>
                    <CustomerDetailsFormGroup>
                        <Label htmlFor="fname">First Name</Label>
                        <Input {...register("firstname", {required: "Please provide a firstname"})} type="text" id="fname"/>
                        {errors.firstname && <UserInputError>{errors.firstname.message}</UserInputError>}
                    </CustomerDetailsFormGroup>
                    <CustomerDetailsFormGroup>
                        <Label htmlFor="lname">Last Name</Label>
                        <Input  {...register("lastname", {required: "Please provide a lastname"})} type="text" id="lname"/>
                        {errors.lastname && <UserInputError>{errors.lastname.message}</UserInputError>}
                    </CustomerDetailsFormGroup>
                </FullNameInputs>
                <EmailAndPhoneInputs>
                    <CustomerDetailsFormGroup>
                        <Label>E-mail</Label>
                        <Email>{currentUser.email}</Email>
                    </CustomerDetailsFormGroup>
                    <CustomerDetailsFormGroup>
                        <Label> Username </Label>
                        <Username>{currentUser.username}</Username>
                    </CustomerDetailsFormGroup>
                </EmailAndPhoneInputs>
                <GenderAndBirthdayInputs>
                    <CustomerDetailsFormGroup>
                        <Label htmlFor="gender">Gender</Label>
                        <GenderSelect  {...register("gender", {required: "Please provide a firstname"})} id="gender">
                            <GenderOption value="">Select Option</GenderOption>
                            <GenderOption value="male">Male</GenderOption>
                            <GenderOption value="female">Female</GenderOption>
                            <GenderOption value="other">Other</GenderOption>
                        </GenderSelect>
                        {errors.gender && <UserInputError>{errors.gender.message}</UserInputError>}
                    </CustomerDetailsFormGroup>
                    <CustomerDetailsFormGroup>
                        <PhoneNoContainer>
                           <Label>Phone Number</Label>
                            <PhoneInputWithCountrySelect 
                                placeholder="Enter phone number" 
                                value={phoneNo}
                                onChange={setPhoneNo}
                                className="customerAddressEditPhone"
                            />
                            {phoneErr && <UserInputError>{phoneErr}</UserInputError>}
                        </PhoneNoContainer>
                    </CustomerDetailsFormGroup>
                </GenderAndBirthdayInputs>
                <DateOfBirthContainer>
                    <CustomerDetailsFormGroup>
                        <Label>Date of Birth</Label>
                        <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} className="customerEditDate"/>
                    </CustomerDetailsFormGroup>
                </DateOfBirthContainer>
                <SaveButtonContainer>
                    <SaveButton type="submit" disabled={isFetching? "disabled" : false}>
                        Save
                    </SaveButton>
                </SaveButtonContainer>
            </CustomerDetailsEditForm>
        </CustomerDetailsEditContainer>
    )
};


export default CustomerDetailsEdit;