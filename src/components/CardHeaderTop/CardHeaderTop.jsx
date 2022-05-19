import React from "react";
import styled from "styled-components";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from "react-router-dom";
import "./CardHeaderTop.css";

const CardContainer = styled.div`
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid rgb(237, 237, 237);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
`;

const CardHeaderContainer = styled.div`
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;
`;

const CardHeader = styled.h1`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
`;

const EditIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify content: center;
    cursor: pointer;
`;

const CardContent = styled.div`
    padding: 1rem 2rem;
`;

const CardHeaderTop = (props) => {
    return(
        <CardContainer>
            <CardHeaderContainer>
                <CardHeader>
                    {props.header}
                </CardHeader>
                <EditIconContainer>
                    <Link to={props.to} className="editLink">
                        <EditOutlinedIcon className="editIcon" style={{fontSize: "2.5rem", color: "#ACBFA3"}}/> 
                    </Link>               
                </EditIconContainer>
            </CardHeaderContainer>
            <CardContent>
                {props.children}
            </CardContent>
        </CardContainer>
    );
};



export default CardHeaderTop;