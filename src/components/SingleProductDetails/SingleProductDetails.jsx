import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import ProductImage from '../ProductImage/ProductImage';
import ProductTab from '../ProductTab/ProductTab';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import {smallPhone, res480, res700, res860, res1023} from '../../responsive';
import { commaListed, capitalizeFirstLetterOfWord } from "../../usefulFunc";
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from "react-redux";

const ProductWrapper = styled.div`
    padding-bottom: 5rem;

    ${res1023({width: "85%", margin: "0 auto"})}
    ${res860({width: "100%"})}
    ${res700({width: "70%"})}
    ${res480({width: "85%"})}
`;

const Product = styled.div`
    display: flex;

    ${res700({flexDirection: "column"})}
`;

const ImageContainer = styled.div`
    flex: 0 0 350px;
    position: relative;

    ${res700({height: "460px", paddingBottom: "3rem"})}
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
    margin-bottom: 1.5rem;
    font-family: Lato, sans-serif;
`;

const ProductPrice = styled.div`
    color: #000;
    font-weight: 700;
    font-size: 2rem;
    margin: 1rem 0;
`;

const ProductOptionsContainer = styled.div`
    padding: 1rem;
`; 

// const ProductPacking = styled.div`
//     padding-bottom: 2rem;
// `;

// const ProductPackingMessage = styled.p`
//     font-size: 1.5rem;
// `;

const OptionTitle = styled.h4`
    font-size: 1.3rem;
    color: lightgrey;
    padding-bottom: 1.5rem;
`;

const SizeOfProduct = styled.p`
    color: #7E8485;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: Lato, sans-serif;
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
    flex: 0 0 30%;
    border-bottom: 2px solid #9AAF8F;
    margin-right: 40px;
    display: flex;
`;

const InputNumber = styled.input`
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
    cursor: pointer;
    width: 100%;
    height: 50%;
`;

const DecreaseButton = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    width: 100%;
    cursor: pointer;
    height: 50%;
`;

const AddToCartContainer = styled.div`
    flex: 1;
    display: flex;
`;

const AddToCartButton = styled.button`
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

    ${smallPhone({padding: "0.8rem 1.5rem"})}
`;

const ProductDetails = styled.div`
    padding-top: 2rem;
`;

const Title = styled.strong``;

const Detail = styled.p`
    font-size: 1.5rem;

    &:not(:last-child){
        margin-bottom: 0.5rem;
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
    max-width: 100%;
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


const SingleProductDetails = ({productName,productDetails, errorMsg}) => {

    // 0- SMALL 1- MEDIUM 2- LARGE (SIZE INDEXES);

    const [size, setSize] = useState("");
    const [showProduct, setShowProduct] = useState(false);
    const [quantity, setQuantity] = useState(1);
    // const [isDisabled, setIsDisabled] = useState(true);
    const dispatch = useDispatch();
    

    const toggleView = () => {
        setShowProduct(!showProduct);
    };

    const updateProductQuantity = e  => {
        const inputedValue = Number(e.target.value);

        setQuantity(inputedValue);
    };

    const incrementQuantity = () => {
       setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };
    
    const setProductPrice = size => {
        const productInfo = productDetails.find(product => product.size === size);

        if(productDetails.length === 1){
            return `₦${productDetails[0].price}`
        }else{
            if(size === ""){
                return `₦${productDetails[0].price}-₦${productDetails[productDetails.length - 1].price}`
            }else{
                return `₦${productInfo.price}`;
            }
        }
    };

    const setSelectOptions = noOfProducts => {
        let rendered = "";
        switch (noOfProducts){
            case 2:
                rendered =  <>
                                <PackingOption value="">choose an option</PackingOption>
                                <PackingOption value={productDetails[0].size}>{capitalizeFirstLetterOfWord(productDetails[0].size)}</PackingOption>
                                <PackingOption value={productDetails[1].size}>{capitalizeFirstLetterOfWord(productDetails[1].size)}</PackingOption>
                            </>;
            break;
            case 3:
                 rendered = <>
                                <PackingOption value="">choose an option</PackingOption>
                                <PackingOption value={productDetails[0].size}>{capitalizeFirstLetterOfWord(productDetails[0].size)}</PackingOption>
                                <PackingOption value={productDetails[1].size}>{capitalizeFirstLetterOfWord(productDetails[1].size)}</PackingOption>
                                <PackingOption value={productDetails[2].size}>{capitalizeFirstLetterOfWord(productDetails[2].size)}</PackingOption>
                            </>;
            break;
            default:
                console.log("No other sizes.");

        }

        return rendered;
    };

    const setShortDescription = size => {
        const productInfo = productDetails.find(product => product.size === size);
        
        if(productDetails.length === 1){
            return `${productDetails[0].shortDesc}`
        }else{
            if(size === ""){
                return "Select size to view description"
            }else{
                return productInfo.shortDesc;
            }
        }
    };

    // const setSingleProductPackingOption = packingOption => {
    //     if(packingOption.length === 1){
    //         return (
    //             <PackingSelect>
    //                     <PackingOption>choose an option</PackingOption>
    //                     <PackingOption>{productDetails[0].packingOptions[0]}</PackingOption>
    //             </PackingSelect>
    //         );
    //     }else {
    //         return (
    //             <PackingSelect>
    //                     <PackingOption>choose an option</PackingOption>
    //                     <PackingOption>{productDetails[0].packingOptions[0]}</PackingOption>
    //                     <PackingOption>{productDetails[0].packingOptions[1]}</PackingOption>
    //             </PackingSelect>
    //         );
    //     }
    // };

    // const setPackingOptions = size => {
    //     //handle packing options here
    //     switch (size){
    //         case "":
    //             return (
    //                 <ProductPackingMessage>
    //                     Select size to view packing options available
    //                 </ProductPackingMessage>
    //             );
    //         case "small":
    //             if(productDetails[0].packingOptions.length === 1){
    //                 return (
    //                     <PackingSelect>
    //                         <PackingOption>choose an option</PackingOption>
    //                         <PackingOption>{productDetails[0].packingOptions[0]}</PackingOption>
    //                     </PackingSelect>
    //                 );
    //             }else{
    //                 return (
    //                     <PackingSelect>
    //                         <PackingOption>choose an option</PackingOption>
    //                         <PackingOption>{productDetails[0].packingOptions[0]}</PackingOption>
    //                         <PackingOption>{productDetails[0].packingOptions[1]}</PackingOption>
    //                     </PackingSelect>
    //                 );
    //             }
    //         break; 
    //         case "medium":
    //             if(productDetails[1].packingOptions.length === 1){
    //                 return (
    //                     <PackingSelect>
    //                         <PackingOption>choose an option</PackingOption>
    //                         <PackingOption>{productDetails[1].packingOptions[0]}</PackingOption>
    //                     </PackingSelect>
    //                 );
    //             }else{
    //                 return (
    //                     <PackingSelect>
    //                         <PackingOption>choose an option</PackingOption>
    //                         <PackingOption>{productDetails[1].packingOptions[0]}</PackingOption>
    //                         <PackingOption>{productDetails[1].packingOptions[1]}</PackingOption>
    //                     </PackingSelect>
    //                 );
    //             }
    //         break; 
    //         case "large":
    //             if(productDetails[2].packingOptions.length === 1){
    //                 return (
    //                     <PackingSelect>
    //                         <PackingOption>choose an option</PackingOption>
    //                         <PackingOption>{productDetails[2].packingOptions[0]}</PackingOption>
    //                     </PackingSelect>
    //                 );
    //             }else{
    //                 return (
    //                     <PackingSelect>
    //                         <PackingOption>choose an option</PackingOption>
    //                         <PackingOption>{productDetails[2].packingOptions[0]}</PackingOption>
    //                         <PackingOption>{productDetails[2].packingOptions[1]}</PackingOption>
    //                     </PackingSelect>
    //                 );
    //             }
    //         break; 
    //     }
    // };

    const setProductID = size => {
        const productInfo = productDetails.find(product => product.size === size);

        if(productDetails.length === 1){
            return `${productDetails[0]._id}`
        }else{
            if(size === ""){
                return `Select size to view Product ID`
            }else{
                return `${productInfo._id}`
            }
        }
    };

    const handleSelect = (e) => {
        setSize(e.target.value);
    }

    const handleCartAddition = size => {
        const productInfo = productDetails.find(product => product.size === size);

        if(productDetails.length === 1){
            const product = productDetails[0];
            if(!product.inStock){
                alert("Item is currently out of stock, please check back later or shop more products.");
                return;
            }
            dispatch(addProduct({ ...product, quantity}));
        }else{
            if(size === ""){
                alert("Please select a size before adding this product to your cart.");
            }else{
                if(quantity === 0){
                    alert("Please select a valid amount before adding this product to your cart.");
                    return;
                }
                if(!productInfo.inStock){
                    alert("Item is currently out of stock, please check back later or shop more products.");
                    return;
                }
                dispatch(addProduct({ ...productInfo, quantity}));
            }
        }
    };

    return (
        <>
        {
            errorMsg? 
            <errMsg>Unable to fetch product, please <span className="pageRefresh" onClick={() => { window.location.reload() } }> reload </span> page or check your internet connection and try again.</errMsg>
            :
            (
            <>
            <ProductWrapper>
                <Product>
                    <ImageContainer>
                        <ProductImage source={productDetails[0].img}/>
                        <ViewIcon onClick={toggleView}>
                            <SearchIcon style={{fontSize: 30}}/>
                        </ViewIcon>
                    </ImageContainer>
                    <ProductDescContainer>
                        <ProductDesc>
                            <ProductOverview>
                                {setShortDescription(size)}
                            </ProductOverview>
                            <ProductPrice>{setProductPrice(size)}</ProductPrice>
                            <ProductOptionsContainer>
                                {/* <ProductPacking>
                                    <OptionTitle>Packing</OptionTitle>
                                    {(productDetails.length === 1)? setSingleProductPackingOption(productDetails[0].packingOptions) : setPackingOptions(size)}
                                </ProductPacking> */}
                                {productDetails.length === 1?
                                    (<ProductSize>
                                        <OptionTitle>Size</OptionTitle>
                                        <SizeOfProduct>{productDetails[0].size}</SizeOfProduct>
                                    </ProductSize>)
                                    :
                                    (<ProductSize onChange={handleSelect}>
                                        <OptionTitle>Size</OptionTitle>
                                        <PackingSelect>
                                            {setSelectOptions(productDetails.length)}
                                        </PackingSelect>
                                    </ProductSize>)
                                }
                            </ProductOptionsContainer>
                            <ProductQuantityContainer>
                                <ProductQuantity>
                                    <InputContainer>
                                        <InputNumber 
                                            type="text"
                                            name="productQuantity"
                                            value={quantity}
                                            onChange={updateProductQuantity}
                                        />
                                    </InputContainer>
                                    <ButtonContainer>
                                        <IncreaseButton onClick={incrementQuantity}>
                                            <KeyboardArrowUpIcon style={{fontSize: 20}}/>
                                        </IncreaseButton>
                                        <DecreaseButton onClick={decrementQuantity}>
                                            <KeyboardArrowDownIcon style={{fontSize: 20}}/>
                                        </DecreaseButton>
                                    </ButtonContainer>
                                </ProductQuantity>
                                <AddToCartContainer>
                                    <AddToCartButton onClick={() => handleCartAddition(size)}>
                                        Add To Cart
                                    </AddToCartButton>
                                </AddToCartContainer>
                            </ProductQuantityContainer>
                            <ProductDetails>
                                <Detail>
                                    <Title>Categories:</Title> {commaListed(productDetails[0].categories)}
                                </Detail>
                                <Detail>
                                    <Title>Product ID:</Title> {setProductID(size)}
                                </Detail>
                            </ProductDetails>
                        </ProductDesc>
                    </ProductDescContainer>
                </Product>
                <ProductTab size={size} productDetails={productDetails}/>
                <RelatedProducts productName={productName} categories={productDetails[0].categories}/>
            </ProductWrapper>
            <ModalContainer show={showProduct}>
                <ModalImage src={productDetails[0].img}/>
                <CloseIconContainer onClick={toggleView}>
                    <CloseIcon style={{fontSize: 20, color: '#fff'}}/>
                </CloseIconContainer>
            </ModalContainer>
            </>
            )
        }
        </>
    );
};


export default SingleProductDetails;