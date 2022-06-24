import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Container = styled.div`
    margin-bottom: 0.5rem;
`;

const Rating = ({rating, starSize}) => {
    return (
        <Container>
            {[...Array(5)].map((star, i) => {
                return (
                    rating >= i + 1? 
                    <StarBorderIcon key={i + 1} style={{color: '#B8A398', fontSize: starSize}} /> 
                    :
                    <StarBorderIcon key={i + 1} style={{fontSize: starSize}}/>
                )
            })
            }
        </Container>
    );
};


export default Rating;