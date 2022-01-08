import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    height: 300px;
    position: relative;
    background-image: url(./enaturals/enaturals13.jpg);
    background-size: cover;
    background-position: center;
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #28272e;
    width: 60%;
`;

const Title = styled.h2`
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 300;
    padding: 2rem 0;
`;

const Location = styled.div`
    font-size: 1.5rem;
`;

const PageTitle = ({title, pageLocation}) => {
    return (
        <Wrapper>
            <TitleContainer>
                <Title>
                    {title}
                </Title>
                <Location>
                    {pageLocation}
                </Location>
            </TitleContainer>
        </Wrapper>
    );
};



export default PageTitle;