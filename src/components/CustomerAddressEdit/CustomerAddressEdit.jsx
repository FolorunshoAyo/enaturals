import React, {useState} from "react";
import styled from "styled-components";
import naijaLocations from "naija-locations";
import "react-datepicker/dist/react-datepicker.css";
import { res480 } from "../../responsive";

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

const PhoneNoContainer = styled.div`
    width: 100%;
    display: flex;
`;

const AddPhoneNoContainer = styled(PhoneNoContainer)``;

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

const AddPhoneNo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
`;

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

const SetAsDefaultContainer = styled(AdditionalInfoContainer)``;

const SetAsDefaultMessage = styled.label`
    user-select: none;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
`;

const SetAsDefaultInput = styled.input`
    padding: 1.5rem;
    margin-right: 5px;
    vertical-align: middle;
    accent-color: #acbfa3;
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

let initialRegion = "";

const CustomerAddressEdit = ({ createNew }) => {
    const [selectedLocation, setSelectedLocation] = useState({region: "", city: ""});

    const allRegions = naijaLocations.states();
    const cities = selectedLocation.region && naijaLocations.locals(selectedLocation.region);


    const handleSelectedRegion = (e) => {
        console.log(initialRegion, e.target.value);

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

    console.log(selectedLocation);

    return (
        <CustomerAddressEditContainer>
            <CustomerAddressEditForm>
                <FullNameInputs>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="fname">First Name</Label>
                        <Input type="text" value="Folorunsho" id="fname"/>
                    </CustomerAddressFormGroup>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="lname">Last Name</Label>
                        <Input type="text" value="Shodiya" id="lname"/>
                    </CustomerAddressFormGroup>
                </FullNameInputs>
                <GenderAndBirthdayInputs>
                    <CustomerAddressFormGroup>
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
                    </CustomerAddressFormGroup>
                    <CustomerAddressFormGroup>
                        <AddPhoneNoContainer>
                            <PrefixContainer>
                                <PrefixLabel>
                                    Prefix
                                </PrefixLabel>
                                <Prefix>+234</Prefix>
                            </PrefixContainer>
                            <AddPhoneNo>
                                <Input type="text" value={createNew? "" : "81541763252"} placeholder="Additional Phone Number"/>
                            </AddPhoneNo>
                        </AddPhoneNoContainer>
                    </CustomerAddressFormGroup>
                </GenderAndBirthdayInputs>
                <AddressInputContainer>
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" value={createNew? "" : "Plot 3a, Ayonnusi Estate, Olaoluwa Ige St."} id="address"/>
                </AddressInputContainer>
                <AdditionalInfoContainer>
                    <Input type="text" placeholder="Additional Information" value="" />
                </AdditionalInfoContainer>
                <LocationInputs>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="region">Region</Label>
                        <RegionSelect id="region" onChange={handleSelectedRegion}>
                            <RegionOption value="">Please Select</RegionOption>
                            {allRegions.map(region => (
                                <RegionOption key={region.id}>{region.name}</RegionOption>
                            ))}
                        </RegionSelect>
                    </CustomerAddressFormGroup>
                    <CustomerAddressFormGroup>
                        <Label htmlFor="city">City</Label>
                        <CitySelect id="city" value={selectedLocation.city} onChange={handleSelectedCity}>
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
                    </CustomerAddressFormGroup>
                </LocationInputs>
                {
                    createNew ?
                    <SetAsDefaultContainer>
                        <SetAsDefaultMessage> <SetAsDefaultInput type="checkbox"/> Set as Default Address</SetAsDefaultMessage>
                    </SetAsDefaultContainer>
                    :
                    ""
                }
                <SaveButtonContainer>
                    <SaveButton>
                        Save
                    </SaveButton>
                </SaveButtonContainer>
            </CustomerAddressEditForm>
        </CustomerAddressEditContainer>
    )
};


export default CustomerAddressEdit;