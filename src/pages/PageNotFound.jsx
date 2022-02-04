import React from 'react';
import styled from 'styled-components';
import { smallPhone, res750 } from '../responsive';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2eeec;
    height: 100vh;
`;

const Wrapper = styled.div`
    flex: 0 0 50%;
    padding: 1.5rem 0;
    box-shadow: 1.95px 1.95px 2.6px rgba(0,0,0, .15);

    ${res750({flex: "0 0 70%"})}
    ${smallPhone({flex: "0 0 90%"})}
`;

const StatusCode = styled.div`
    color: gray;
    text-align: center;
    margin-bottom: 5px;
`;

const Img = styled.img`
    height: 60px;
`;

const LogoContainer = styled.div`
    text-align: center;
    padding: 2rem 0;
`;

const StatusCodeHeader = styled.h1`
    font-size: 10rem;
    letter-spacing: 5px;
    color: #acbfa3;
`;

const StatusCodeText = styled.p`
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    margin-top: 30px;
`;

const ActionLink = styled.div`
    flex: 0 0 35%;
    text-align: center;
`;



const PageNotFound = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <Img src="../enaturals/stripped-logo.png" />
                </LogoContainer>
                <StatusCode>
                    <StatusCodeHeader>
                        404
                    </StatusCodeHeader>
                    <StatusCodeText>
                        page not found
                    </StatusCodeText>
                    <ActionContainer>
                        <ActionLink>
                            Home Page
                        </ActionLink>
                        <ActionLink>
                            Search
                        </ActionLink>
                    </ActionContainer>
                </StatusCode>
            </Wrapper>
        </Container>
    );
};



export default PageNotFound;