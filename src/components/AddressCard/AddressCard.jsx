import React from "react";
import styled from "styled-components";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from "react-router-dom";
import "../CardHeaderTop/CardHeaderTop.css";

const CardContainer = styled.div`
    flex: 0 0 48%;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid rgb(237, 237, 237);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
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

const EditIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify content: center;
    cursor: pointer;
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

const AddressCard = (props) => {
    return(
        <CardContainer>
            <CardContent isDefault={props.isDefault}>
                {props.children}
            </CardContent>
            <CardFooterContainer>
                <SetAsDefaultButtonContainer>
                    <SetAsDefaultButton disabled={props.isDefault? "disabled" : false}>
                        Set as default
                    </SetAsDefaultButton>
                </SetAsDefaultButtonContainer>
                <EditIconContainer>
                <Link to={props.to} className="editLink">
                    <EditOutlinedIcon className="editIcon" style={{fontSize: "2rem", color: "#ACBFA3"}}/>   
                </Link>             
                </EditIconContainer>
            </CardFooterContainer>
        </CardContainer>
    );
};



export default AddressCard;