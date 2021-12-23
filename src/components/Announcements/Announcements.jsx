import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #9AAF8F;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.5rem;
`;
const Announcement = () => {
    return(
        <Container>
            Super deal! Free shipping on orders over 2000 naira.
        </Container>

    );  
};

export default Announcement;