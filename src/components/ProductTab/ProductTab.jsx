import React, {useState} from 'react';
import styled from 'styled-components';
import StarRating from '../StarRating/StartRating';
import AllReviews from '../AllReviews/AllReviews';
import {smallPhone, medPhone, res480, res700, res1023} from '../../responsive';

const ProductTabContainer = styled.div`
    margin-top: 10rem;

    ${res480({marginTop: "5rem"})}
`;

const ProductTabs = styled.div`
    display: flex;

    ${res480({flexDirection: "column"})}
`;

const Tab = styled.div`
    flex: 0 0 28%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: uppercase;
    background-color: ${props => props.active? '#F2EEEC' : '#ACBFA3'} ;
    color: ${props => props.active? '#4B5354' : '#fff'};
    cursor: pointer;
    height: 60px;
    
    &:not(:last-child){
        margin-right: 20px;

        ${res700({marginRight: "10px"})}
        ${medPhone({marginRight: "5px"})}
        ${res480({marginRight: "0"})}
    }
    
    ${res1023({flex: "0 0 30%", fontSize: "1.5rem"})}
    ${res700({flex: "0 0 32%", fontSize: "1.3rem", textAlign: "center"})}
    ${res480({marginBottom: "1rem", padding: "2rem 0"})}
`;

const ProductTabBody = styled.div`
    background-color: #F2EEEC;
    padding: 2rem 1rem;
`;

const DescriptionContent = styled.div`
    display: ${props => props.active? 'block' : 'none'};
    padding: 2rem 3rem;
`;

const Description = styled.p`
    font-size: 1.7rem;
    color: #4B5354;
    font-family: Lato, sans-serif;
`;

const AdditionalInformationContent = styled.div`
    display: ${props => props.active? 'block' : 'none'};
    padding: 1rem 2rem;
`;

const Title = styled.h2`
    color: #4B5354;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;

    ${res1023({fontSize: "2rem"})}
`;

const AdditionalInformation = styled.div`
    padding: 2rem 0;
`;

const PackingTypes = styled.div`
    display: flex;
    border-top: 2px dotted #7e8485;
    border-bottom: 2px dotted #7e8485;
    padding: 1rem 2rem;
`;

const Label = styled.div`
    flex: 0 0 20%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: Lato, sans-serif;
    font-size: 1.3rem;
`;

const Info = styled.div`
    flex: 1;
    font-style: italic;
    font-size: 1.3rem;    
    font-weight: 400;
`;

const SizeTypes = styled.div`
    display: flex;
    padding: 1rem 2rem;
    border-bottom: 2px dotted #7e8485;
`;

const ReviewsContent = styled.div`
    display: ${props => props.active? 'flex' : 'none'};
    justify-content: space-between;
    padding: 3rem;

    ${res700({flexDirection: "column"})}
`;

const Reviews = styled.div`
    flex: 0 0 48%;
`;

const ReviewsBody = styled.div`
    font-size: 1.3rem;
    height: 100%;
    overflow: auto;
`;

const ReviewFormContainer = styled.div`
    padding: 0 3rem;

    ${res700({padding: "0"})}
`;


const ReviewForm = styled.form`

`;

const Instructions = styled.p`
    color: #7e8485;
    font-size: 1.3rem;
    padding: 1rem 0;
`;

const ReviewFormGroup = styled.div`
    padding: 1rem 0;
`;

const Input = styled.input`
    border: none;
    padding: 2rem 0.5rem;
    background-color: transparent;
    border-bottom: 2px solid #7e8485;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    width: 100%;

    &:focus{
        outline: none;
        border-bottom: 2px solid #BFABA0;
    }
`;

const RatingLabel = styled.p`
    font-size: 1.5rem;
    color: #7e8485;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

const TextInput = styled.textarea`
    border: none;
    padding: 1rem 2rem;
    background-color: transparent;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    width: 100%;
    border-bottom: 2px solid #7e8485;
    resize: none;
    height: 150px;

    &:focus{
        outline: none;
        border-bottom: 2px solid #BFABA0;
    }
`;

const ValidationContainer = styled.div`
    margin-bottom: 1rem;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const ValidationInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
`;

const ValidationText = styled.span`
    font-size: 1.2rem;
    font-family: Lato, sans-serif;
`;

const ButtonContainer = styled.div`

`;

const Button = styled.button`
    width: 40%;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid #B8A398;
    text-transform: uppercase;
    color: #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover{
        background-color: #B8A398;
        color: #fff;
    }

    ${smallPhone({width: "60%"})}
`;
const ProductTab = () => {
    const [tabNo, toggleTab] = useState(1);

    const switchTab = (tabNumber) => {
        toggleTab(tabNumber);
    }

    return (
        <ProductTabContainer>
            <ProductTabs>
                <Tab onClick={() => switchTab(1)} active={tabNo === 1? true : false} >
                    Description
                </Tab>
                <Tab onClick={() => switchTab(2)} active={tabNo === 2? true : false} >
                    Additional information
                </Tab>
                <Tab onClick={() => switchTab(3)} active={tabNo === 3? true : false}>
                    Review{"(0)"}
                </Tab>
            </ProductTabs>
            <ProductTabBody>
                <DescriptionContent active={tabNo === 1? true : false}>
                    <Description>
                        This product is a free product that contains all the necessary requirement for a wonderful experience.
                        It has all the required nutrient and e.t.c for a brilliant skin.
                    </Description>
                </DescriptionContent>
                <AdditionalInformationContent active={tabNo === 2? true : false}>
                    <Title>Additional Information</Title>
                    <AdditionalInformation>
                        <PackingTypes>
                            <Label>
                                Packing
                            </Label>
                            <Info>
                                Gift, original
                            </Info>
                        </PackingTypes>
                        <SizeTypes>
                            <Label>
                                Sizes
                            </Label>
                            <Info>
                                Small, Medium, Large
                            </Info>
                        </SizeTypes>
                    </AdditionalInformation>
                </AdditionalInformationContent>
                <ReviewsContent active={tabNo === 3? true : false} >
                    <Reviews>
                        <Title>Reviews</Title>
                        <ReviewsBody>
                           <AllReviews />
                        </ReviewsBody>
                    </Reviews>
                    <ReviewFormContainer>
                        <ReviewForm>
                            <Title>{window.innerWidth <= 700? "Add a Review" :"Be the first to review Whitening oil"}</Title>
                            <Instructions>Your email address will not be published. Required fields are marked *</Instructions>
                            <ReviewFormGroup>
                                <Input type="text" placeholder="Name *"/>
                            </ReviewFormGroup>
                            <ReviewFormGroup>
                                <Input type="text" placeholder="Email *"/>
                            </ReviewFormGroup>
                            <ReviewFormGroup>
                                <RatingLabel>Your Rating *</RatingLabel>
                                <StarRating />
                            </ReviewFormGroup>
                            <ReviewFormGroup>
                                <TextInput placeholder="Your Review *">

                                </TextInput>
                            </ReviewFormGroup>
                            <ValidationContainer>
                                <ValidationInfo>
                                    <Checkbox type="checkbox"/>
                                    <ValidationText>
                                        By using this form you agree with the storage and handling of your data by this website. *
                                    </ValidationText>
                                </ValidationInfo>
                                <ButtonContainer>
                                    <Button> Submit </Button>
                                </ButtonContainer>
                            </ValidationContainer>
                        </ReviewForm>
                    </ReviewFormContainer>
                </ReviewsContent>   
            </ProductTabBody>
        </ProductTabContainer>
    );
}


export default ProductTab;