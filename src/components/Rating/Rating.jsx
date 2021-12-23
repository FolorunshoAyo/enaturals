import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Container = styled.div`
    margin: 0.4rem 0;
`;

const Rating = ({rating}) => {
    return (
        <Container>
            {[...Array(5)].map((star, i) => {
                return (
                    rating >= i + 1? 
                    <StarBorderIcon style={{color: '#B8A398'}} /> 
                    :
                    <StarBorderIcon />
                )
            })
            }
        </Container>
    );
};


export default Rating;