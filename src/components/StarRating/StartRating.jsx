import React, {useState} from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Container = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
`;

const Label = styled.label``;

const Input = styled.input`
    display: none;
`;

const Star = styled.div`
    color: ${props => props.color};
    transition: color 200ms ease-in;
    cursor: pointer;
`;

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return ( 
        <Container>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <Label key={i}>
                        <Input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        /> 
                        <Star 
                        color={ratingValue <= (hover || rating) ? '#B8A398' : ''}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        >
                        <StarBorderIcon style={{fontSize: 30}} />
                        </Star>
                    </Label>
                );
            })}
        </Container>
    );
};


export default StarRating;