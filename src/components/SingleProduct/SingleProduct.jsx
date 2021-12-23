import React, {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import ProductImage from '../ProductImage/ProductImage';
import ProductTab from '../ProductTab/ProductTab';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const Container = styled.div`
    padding: 5rem 8rem;
`;

const ProductWrapper = styled.div`
    padding-bottom: 5rem;
`;

const Product = styled.div`
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 0 0 40%;
    position: relative;
`;

const ViewIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ProductDescContainer = styled.div`
    flex: 1;
    margin-left: 3rem;
`;

const ProductDesc = styled.div`
`;

const ProductOverview = styled.p`
    color: #7E8485;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    font-family: Lato, sans-serif;
`;

const ProductPrice = styled.div`
    color: #000;
    font-weight: 700;
    font-size: 2rem;
    margin: 1.5rem 0;
`;

const ProductOptionsContainer = styled.div`
    padding: 1rem;
`; 

const ProductPacking = styled.div`
    padding-bottom: 2rem;
`;

const OptionTitle = styled.h4`
    font-size: 1.3rem;
    color: lightgrey;
    padding-bottom: 1.5rem;
`;

const PackingSelect = styled.select`
    font: inherit;
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid #9AAF8F;
    padding: 1rem;

    &:focus{
        outline: none;
        border-bottom: 2px solid #B8A398;
    }
`;

const PackingOption = styled.option``;

const ProductSize = styled.div`
    padding-bottom: 1rem;
`;

const ProductQuantityContainer = styled.div`
    display: flex;
    width: fit-content; 
    padding: 1rem;
`;

const ProductQuantity = styled.div`
    flex: 0 0 20%;
    border-bottom: 2px solid #9AAF8F;
    margin-right: 40px;
    display: flex;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    font-size: 2rem;
    border: none;

    &:focus{
        outline: none
    }

    &:disabled{
        background-color: transparent;
    }

    &:focus ${ProductQuantity}{
        border-bottom: 2px solid #B8A398;
    }
`;

const InputContainer = styled.div`
    flex: 0 0 80%;
`; 

const ButtonContainer = styled.div`
    flex: 1;
`;

const IncreaseButton = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    width: 100%;
    height: 50%;
`;

const DecreaseButton = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    width: 100%;
    height: 50%;
`;

const AddToCartContainer = styled.div`
    flex: 1;
    display: flex;
`;

const AddToCartButton = styled.button`
    width: 160px;
    height: 100%;
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
`;

const ProductDetails = styled.div`
    padding-top: 3rem;
`;

const Title = styled.strong``;
const Detail = styled.p`
    font-size: 1.5rem;

    &:not(:last-child){
        margin-bottom: 2rem;
    }
`;


const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0px;
    display: ${props => props.show? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background-color: #000;
    transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
    visibility: ${props => props.show? 'visible' : 'hidden'};
    opacity: ${props => props.show? '1' : '0'};
    transform: ${props => props.show? 'scale(1)' : 'scale(0)'};;
    overflow: hidden;
    z-index: 200; 
`;

const ModalImage = styled.img`
    width: auto;
    max--width: 100%;
    height: auto;
    display: block;
    line-height: 0;
    padding: 20px 0 20px;
    margin: 0 auto;
`;

const CloseIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 10px;
    right: 10px;
    wisth: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0,0,0,.4);
    cursor: pointer;
`;

const SingleProduct = () => {
    const [showProduct, setShowProduct] = useState(false);

    const toggleView = () => {
        setShowProduct(!showProduct);
    };

    return (
        <Container>
            <ProductWrapper>
                <Product>
                    <ImageContainer>
                        <ProductImage source="../enaturals/enaturals7.jpg"/>
                        <ViewIcon onClick={toggleView}>
                            <SearchIcon style={{fontSize: 30}}/>
                        </ViewIcon>
                    </ImageContainer>
                    <ProductDescContainer>
                        <ProductDesc>
                            <ProductOverview>
                                Nulla suscipit duis sed velit sem, gravida amet aliquam, sit nonummy ac
                                tortor pellentesque. Sed vehicula nunc sed vel duis, nunc diam. Interdum lectus
                                parturient elementum imperdiet in.
                            </ProductOverview>
                            <ProductPrice>₦1000 - ₦5000</ProductPrice>
                            <ProductOptionsContainer>
                                <ProductPacking>
                                    <OptionTitle>Packing</OptionTitle>
                                    <PackingSelect>
                                        <PackingOption>choose an option</PackingOption>
                                        <PackingOption>Gift</PackingOption>
                                        <PackingOption>Original</PackingOption>
                                    </PackingSelect>
                                </ProductPacking>
                                <ProductSize>
                                    <OptionTitle>Size</OptionTitle>
                                    <PackingSelect>
                                        <PackingOption>choose an option</PackingOption>
                                        <PackingOption>Small</PackingOption>
                                        <PackingOption>Medium</PackingOption>
                                        <PackingOption>Large</PackingOption>
                                    </PackingSelect>
                                </ProductSize>
                            </ProductOptionsContainer>
                            <ProductQuantityContainer>
                                <ProductQuantity>
                                    <InputContainer>
                                        <Input type="text"/>
                                    </InputContainer>
                                    <ButtonContainer>
                                        <IncreaseButton>
                                            <KeyboardArrowUpIcon style={{fontSize: 20}}/>
                                        </IncreaseButton>
                                        <DecreaseButton>
                                            <KeyboardArrowDownIcon style={{fontSize: 20}}/>
                                        </DecreaseButton>
                                    </ButtonContainer>
                                </ProductQuantity>
                                <AddToCartContainer>
                                    <AddToCartButton>
                                        Add To Cart
                                    </AddToCartButton>
                                </AddToCartContainer>
                            </ProductQuantityContainer>
                            <ProductDetails>
                                <Detail>
                                    <Title>Categories:</Title> Refreshing, Scrubbing
                                </Detail>
                                <Detail>
                                    <Title>Tag:</Title> Handmade Soap
                                </Detail>
                                <Detail>
                                    <Title>Product ID:</Title> 213
                                </Detail>
                            </ProductDetails>
                        </ProductDesc>
                    </ProductDescContainer>
                </Product>
                <ProductTab />
                <RelatedProducts />
            </ProductWrapper>
            <ModalContainer show={showProduct}>
                <ModalImage src="../enaturals/enaturals7.jpg"/>
                <CloseIconContainer onClick={toggleView}>
                    <CloseIcon style={{fontSize: 20, color: '#fff'}}/>
                </CloseIconContainer>
            </ModalContainer>
        </Container>
    );
};


export default SingleProduct;