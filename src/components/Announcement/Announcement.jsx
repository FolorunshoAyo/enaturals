import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { tokenInvalidLogout } from '../../redux/apiCalls';
import { userRequest } from '../../requestMethod';
import { res480 } from '../../responsive';

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9AAF8F;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    z-index: 100;

    ${res480({fontSize: "1rem"})}
`;
const Announcement = () => {
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const testAuthorization = async () => {
            try{
                await userRequest.get("/auth/");
            }catch(error){
                tokenInvalidLogout(dispatch);
            }
        }

        if(user !== null){
            testAuthorization();
        }
    }, [dispatch]);

    return(
        <Container>
            <b>e-naturals</b> &nbsp; is pleased to announce the grand opening of her first official website!!
        </Container>

    );  
};

export default Announcement;