import React, {useState} from "react";
import styled from "styled-components";
import naijaLocations from "naija-locations";
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import "react-datepicker/dist/react-datepicker.css";
import { res480 } from "../../responsive";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addAddress, updateAddress } from "../../redux/apiCalls";
import { CircularProgress } from "@mui/material";

const CustomerAddressEditContainer = styled.div``;

const CustomerAddressEditForm = styled.form``;

const FullNameInputs = styled.div`
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${res480({marginBottom: "1rem", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch"})}
`;

const CustomerAddressFormGroup = styled.div`
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
    padding: 0.5rem;
    font-family: Lato, sans-serif;
    color: #282828;
    font-size: 1.5rem;
    width: 100%;

    &:focus{
        outline: none;
        border-bottom: 1px solid #ACBFA3;
    }
`;

const AddressInputError = styled.div`
    font-family: Lato, sans-serif;
    font-size: 1.2rem;
    color: red;
`;

const PhoneNoContainer = styled.div`
    width: 100%;
`;

const AddPhoneNoContainer = styled(PhoneNoContainer)``;


const GenderAndBirthdayInputs = styled(FullNameInputs)``; 

const AddressInputContainer = styled.div`
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
`;

const AdditionalInfoContainer = styled.div`
    margin-bottom: 5rem;
`;

const LocationInputs = styled(FullNameInputs)``;

const RegionSelect = styled.select`
    border: none;
    border-bottom: 1px solid rgb(199, 199, 205);
    padding: 0.5rem;
    font-family: Lato, sans-serif;
    color: #282828;
    font-size: 1.5rem;
    width: 100%;

    &:focus{
        outline: none;
        border-bottom: 1px solid #ACBFA3;
    }
`;

const CitySelect = styled(RegionSelect)``;

const RegionOption = styled.option``;

const CityOption = styled.option``;

// const SetAsDefaultContainer = styled(AdditionalInfoContainer)``;

// const SetAsDefaultMessage = styled.label`
//     user-select: none;
//     font-family: Lato, sans-serif;
//     font-size: 1.5rem;
// `;

// const SetAsDefaultInput = styled.input`
//     padding: 1.5rem;
//     margin-right: 5px;
//     vertical-align: middle;
//     accent-color: #acbfa3;
// `;

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

let initialRegion = "";

const CustomerAddressEdit = ({ createNew }) => {
    const user = useSelector(state => state.user.currentUser);
    const addressID = useLocation().pathname.split("/")[4];
    const selectedAddress = useSelector(state => state.addresses.addresses.find(address => address._id === addressID));
    const { isFetching } = useSelector(state => state.addresses);
    const [selectedLocation, setSelectedLocation] = useState({region: createNew? "" : selectedAddress.region, city: createNew? "" : selectedAddress.city});
    const [phoneNo, setPhoneNo] = useState(createNew? user.phoneno : selectedAddress.phoneNo);
    const [phoneErr, setPhoneErr] = useState("");
    const [addPhoneNo, setAddPhoneNo] = useState(createNew? "" : selectedAddress.addPhoneNo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            firstName: user.firstname,
            lastName: user.lastname,
            address: createNew? "" :  selectedAddress.address,
            additionalInfo: createNew? "" : selectedAddress.additionalInfo
        }
    });
    

    const allRegions = naijaLocations.states();
    const cities = selectedLocation.region && naijaLocations.locals(selectedLocation.region);

    const handleSelectedRegion = (e) => {
        if(initialRegion === e.target.value){
            setSelectedLocation({
                ...selectedLocation,
                city: ""
            });
        }else{
            setSelectedLocation({
                ...selectedLocation,
                region: e.target.value
            });
        }

        initialRegion = e.target.value;
    };

    const handleSelectedCity = (e) => {
        setSelectedLocation({
            ...selectedLocation,
            city: e.target.value
        });
    };

    const onSubmit = (data) => {
        if(phoneNo === ""){
            setPhoneErr("Please input a phone number");
            return;
        }else{
            setPhoneErr("");

            if(createNew){
                addAddress({...data, userId: user._id, phoneNo: phoneNo, addPhoneNo: addPhoneNo, ...selectedLocation}, dispatch);
                setTimeout(() => {
                    navigate("/customer/address");
                }, 3000);
            }else{
                updateAddress(selectedAddress._id, {...data, userId: user._id, phoneNo: phoneNo, addPhoneNo: addPhoneNo, ...selectedLocation}, dispatch);
                setTimeout(() => {
                    navigate("/customer/address");
                }, 3000);
            }
        }
    };

    return (
        <CustomerAddressEditContainer>
            <CustomerAddressEditForm onSubmit={handleSubmit(onSubmit)}>
                <FullNameInputs>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="fname">First Name</Label>
                        <Input {...register("firstName", {required: "please provide a first name"})} type="text" id="fname"/>
                        {errors.firstName && <AddressInputError>{errors.firstName.message}</AddressInputError>}
                    </CustomerAddressFormGroup>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="lname">Last Name</Label>
                        <Input {...register("lastName", {required: "please provide the recipient's last name"})} type="text" id="lname"/>
                        {errors.lastName && <AddressInputError>{errors.lastName.message}</AddressInputError>}
                    </CustomerAddressFormGroup>
                </FullNameInputs>
                <GenderAndBirthdayInputs>
                    <CustomerAddressFormGroup>
                        <PhoneNoContainer>
                            <Label>Phone Number</Label>
                            <PhoneInputWithCountrySelect 
                                placeholder="Enter phone number" 
                                value={phoneNo}
                                onChange={setPhoneNo}
                                className="customerAddressEditPhone"
                            />
                            {phoneErr && <AddressInputError>{phoneErr}</AddressInputError>}
                        </PhoneNoContainer>
                    </CustomerAddressFormGroup>
                    <CustomerAddressFormGroup>
                        <AddPhoneNoContainer>
                            <Label>Additional Phone Number</Label>
                            <PhoneInputWithCountrySelect 
                                placeholder="Enter phone number" 
                                value={addPhoneNo}
                                onChange={setAddPhoneNo}
                                className="customerAddressEditPhone"
                            />
                        </AddPhoneNoContainer>
                    </CustomerAddressFormGroup>
                </GenderAndBirthdayInputs>
                <AddressInputContainer>
                    <Label htmlFor="address">Address</Label>
                    <Input {...register("address", {required: "please provide an address"})} type="text" id="address"n/>
                    {errors.address && <AddressInputError>{errors.address.message}</AddressInputError>}
                </AddressInputContainer>
                <AdditionalInfoContainer>
                    <Input {...register("additionalInfo")} type="text" placeholder="Additional Information" />
                    {errors.additionalInfo && <AddressInputError>{errors.additionalInfo.message}</AddressInputError>}
                </AdditionalInfoContainer>
                <LocationInputs>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="region">Region</Label>
                        <RegionSelect {...register("region", {required: "Please select a region"})} id="region" value={selectedLocation.region} onChange={handleSelectedRegion}>
                            <RegionOption value="">Please Select</RegionOption>
                            {allRegions.map(region => (
                                <RegionOption key={region.id}>{region.name}</RegionOption>
                            ))}
                        </RegionSelect>
                        {errors.region && <AddressInputError>{errors.region.message}</AddressInputError>}
                    </CustomerAddressFormGroup>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="city">City</Label>
                        <CitySelect {...register("city", {required: "Please select a city"})} id="city" value={selectedLocation.city} onChange={handleSelectedCity}>
                            <CityOption value="">Please Select</CityOption>
                            {cities ? 
                                (
                                    cities.map(city => {
                                        return <CityOption key={city.id}>{city.name}</CityOption>;
                                    })
                                ) 
                                :
                                "" 
                            }
                        </CitySelect>
                        {errors.city && <AddressInputError>{errors.city.message}</AddressInputError>}
                    </CustomerAddressFormGroup>
                </LocationInputs>
                {/* {
                    createNew ?
                    <SetAsDefaultContainer>
                        <SetAsDefaultMessage> <SetAsDefaultInput type="checkbox"/> Set as Default Address</SetAsDefaultMessage>
                    </SetAsDefaultContainer>
                    :
                    ""
                } */}
                <SaveButtonContainer>
                    <SaveButton type="submit" disabled={isFetching}>
                        {isFetching? <CircularProgress size="2.5rem" className="accountLoader" /> : "Save"}
                    </SaveButton>
                </SaveButtonContainer>
            </CustomerAddressEditForm>
        </CustomerAddressEditContainer>
    )
};


export default CustomerAddressEdit;