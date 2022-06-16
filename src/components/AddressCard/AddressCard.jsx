import React from "react";
import styled from "styled-components";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from "react-router-dom";
import "../CardHeaderTop/CardHeaderTop.css";
import { DeleteOutline } from "@mui/icons-material";
import { res700 } from "../../responsive";
import { useSelector } from "react-redux";
import { changeDefaultAddress, deleteAddress } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { confirm } from 'react-confirm-box';

const CardContainer = styled.div`
    flex: 0 0 48%;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid rgb(237, 237, 237);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
    margin-bottom: 20px;

    ${res700({flex: "0 0 100%"})}
`;

const SetAsDefaultButtonContainer = styled.div`
`;

const SetAsDefaultButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 1rem;
    color: #ACBFA3;
    transition: all .3s;
    cursor: pointer;

    &:hover{
        background-color: #ACBFA3;
        color: #fff;
        border-radius: 5px;
    }

    &:disabled{
        color: #c7c7cd;
        background-color: transparent;
    }
`;

const CardContent = styled.div`
    background-color: ${props => props.isDefault? "#effce8" : "transparent"};
    padding: 1rem 2rem;
    height: 70%;
`;

const CardFooterContainer = styled.div`
    display: flex;
    padding: 2rem 1rem;
    justify-content: space-between;
    align-items: center;
    height: 30%;
`;

const ActionContainer = styled.div`
    display: flex;
    flex: ${props => props.isDefault? "initial" : "0 0 25%"};
`;

const EditIconContainer = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;
    justify content: center;
    cursor: pointer;
`;

const DeleteIconContainer = styled(EditIconContainer)`
    display: ${props => props.isDefault? "none" : "flex"}
`;

const DeleteIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.5rem;
    transition: all .3s; 
    height: 40px;
    width: 40px;

    &:hover{
        background-color: #acbfa3;
    }

    &:hover .deleteIcon{
        color: #fff !important;
    }
`;

const AddressCard = ({ isDefault, addressID, to, children}) => {
    const { addresses, isFetching } = useSelector(state => state.addresses);
    const dispatch = useDispatch();
    const defaultAddress = addresses.find(address => address.isDefault === true);

    const updateToDefault = () => {
        // CHANGE DEFAULT ADDRESS
        changeDefaultAddress(defaultAddress._id, addressID, dispatch);
    };

    const handleDelete = async () => {
        const validateDelete = await confirm("This address will be parmanently deleted.");

        if(validateDelete){
            deleteAddress(addressID, dispatch);
        }
    }

    return(
        <CardContainer>
            <CardContent isDefault={isDefault}>
                {children}
            </CardContent>
            <CardFooterContainer>
                <SetAsDefaultButtonContainer>
                    {
                        isDefault?
                        <SetAsDefaultButton disabled>
                            Set as default
                        </SetAsDefaultButton>
                        :
                        <SetAsDefaultButton disabled={isFetching? "disabled" : false} onClick={updateToDefault}>
                            Set as default
                        </SetAsDefaultButton>
                    }
                </SetAsDefaultButtonContainer>
                <ActionContainer isDefault={isDefault}>
                    <EditIconContainer>
                        <Link to={to} className="editLink">
                            <EditOutlinedIcon className="editIcon" style={{fontSize: "2rem", color: "#ACBFA3"}}/>   
                        </Link>             
                    </EditIconContainer>
                    <DeleteIconContainer isDefault={isDefault}>
                        <DeleteIcon onClick={handleDelete}>
                            <DeleteOutline style={{fontSize: "2rem", color: "#ACBFA3"}} className="deleteIcon"/>
                        </DeleteIcon>
                    </DeleteIconContainer>
                </ActionContainer>
            </CardFooterContainer>
        </CardContainer>
    );
};



export default AddressCard;