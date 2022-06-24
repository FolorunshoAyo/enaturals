import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { dialCodes } from '../../dialCodes';
import { publicRequest } from "../../requestMethod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/apiCalls";
import { switchTab } from "../../redux/login-register-modalRedux";


const RegisterForm = styled.form`

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

const Error = styled.p`
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    color: red;
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

    &:disabled{
        cursoer: not-allowed;
    }

`;


const RegisterationForm = () => {
    const { isFetching } = useSelector(state => state.user);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [phoneNo, setPhoneNo] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const dispatch = useDispatch();

    const formSchema = Yup.object().shape({
        username: Yup.string()
        .required("Please provide a username"),
        firstname: Yup.string()
        .required("Please provide a firstname"),
        lastname: Yup.string()
        .required("Please provide a lastname"),
        email: Yup.string()
        .required("Please supply an email")
        .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "email must be a valid email"),
        gender: Yup.string()
        .required("Please select gender"),
        password: Yup.string()
          .required('Password is mandatory')
          .min(6, 'Password must be at least 6 char long'),
        confirmPwd: Yup.string()
          .required('Password is mandatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
    });

    const formOptions = { resolver: yupResolver(formSchema) };
    const {register, handleSubmit, reset, formState: { errors }} = useForm(formOptions);

    const handleDialCodeUpdate = (dialCode) => {
        setPhoneNo(dialCode);
    };

    useEffect(() => {
        const getDialCode = async () => {
            try{
                const res = await publicRequest.get("http://ip-api.com/json");
                handleDialCodeUpdate((dialCodes.find(dialCode => dialCode.name === res.data.country).dial_code));
            }catch(error){
                toast.error("Unable to fetch county code (501)")
            }
        }; 

        getDialCode();
    }, []);

    const onSubmit = (data) => {
        if(phoneNo === ""){
            setPhoneErr("Please input a phone number");
            return;
        }else{
            setPhoneErr("");
            registerUser({...data, phoneno: phoneNo, dob: dateOfBirth === ""? "" : dateOfBirth.toISOString().substring(0, 10)}, dispatch);
            setTimeout(() => {
                dispatch(switchTab({tabNo: 1}));
            }, 2000);
            reset();
        }
    };

    return(
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="name">First Name <Required>*</Required></Label>
                    <Input {...register("firstname")} type="text" placeholder="e.g vivian" id="name"/>
                    {errors.firstname && <Error>{errors.firstname.message}</Error>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="lastname">Last Name <Required>*</Required></Label>
                    <Input {...register("lastname")} type="text" placeholder="e.g smith" id="lastname"/>
                    {errors.lastname && <Error>{errors.lastname.message}</Error>}
                </InputContainer>
            </RegisterFormGroup>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="username">Username <Required>*</Required></Label>
                    <Input {...register("username")} type="text" placeholder="e.g trixx" id="registerUsername"/>
                    {errors.username && <Error>{errors.username.message}</Error>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="email">Email <Required>*</Required></Label>
                    <Input {...register("email")} type="email" placeholder="e.g host@server.com" id="email"/>
                    {errors.email && <Error>{errors.email.message}</Error>}
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
                    {phoneErr && <Error>{phoneErr}</Error>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="gender">Gender <Required>*</Required></Label>
                    <GenderSelect {...register("gender")} id="gender">
                        <GenderOption value="">Select gender</GenderOption>
                        <GenderOption value="male">Male</GenderOption>
                        <GenderOption value="female">Female</GenderOption>
                        <GenderOption value="other">Other</GenderOption>
                    </GenderSelect>
                    {errors.gender && <Error>{errors.gender.message}</Error>}
                </InputContainer>
            </RegisterFormGroup>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="rpwd">Password <Required>*</Required></Label>
                    <Input {...register("password")} type="password" id="rpwd" placeholder="type password"/>
                    {errors.password && <Error>{errors.password.message}</Error>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="cpwd">Confirm Password <Required>*</Required></Label>
                    <Input {...register("confirmPwd")} type="password" id="cpwd" placeholder="retype password"/>
                    {errors.confirmPwd && <Error>{errors.confirmPwd.message}</Error>}
                </InputContainer>
            </RegisterFormGroup>
            <RegisterFormGroup>
                <InputContainer>
                    <Label htmlFor="dob">Date of Birth <Required>*</Required></Label>
                    <DateOfBirthContainer>
                        <DatePicker 
                            selected={dateOfBirth} 
                            onChange={(date) => setDateOfBirth(date)}
                        />
                    </DateOfBirthContainer>
                </InputContainer>
            </RegisterFormGroup>
            <SubmitButton type="submit" disabled={isFetching}>
                Register
            </SubmitButton>
        </RegisterForm>
    );
};



export default RegisterationForm;