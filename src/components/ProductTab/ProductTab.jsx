import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRating from '../StarRating/StartRating';
import AllReviews from '../AllReviews/AllReviews';
import {smallPhone, medPhone, res480, res700, res1023} from '../../responsive';
import { filterReviewsForStatusPublished } from '../../usefulFunc';
import { publicRequest, userRequest } from '../../requestMethod';
import { CircularProgress } from '@mui/material';
import toast from "react-hot-toast";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { notLoggedIn } from "../../redux/login-register-modalRedux";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';


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

const Description = styled.pre`
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
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

// const PackingTypes = styled.div`
//     display: flex;
//     border-top: 2px dotted #7e8485;
//     border-bottom: 2px dotted #7e8485;
//     padding: 1rem 2rem;
// `;

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
    font-size: 1.8rem;

    ${res700({flexDirection: "column"})}
`;

const Reviews = styled.div`
    flex: 0 0 48%;

    ${res700({minHeight: "300px", overflowY: "auto"})}
`;

const ReviewsBody = styled.div`
    display: ${props => props.loading === "loading"? "flex" : "block"};
    justify-content: ${props => props.loading === "loading"? "center" : "flex-start"};
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
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
    display: flex;
    flex-direction: column;
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

const Error = styled.p`
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  font-family: Lato, sans-serif;
  font-size: 1.5rem;
  color: red;
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

    &:disabled{
        cursor: not-allowed;
    }

    ${smallPhone({width: "60%"})}
`;

const ErrMessage = styled.p`
`;

const ProductTab = ({size, productDetails}) => {
    // PRODUCT DETAILS CONTAINS AN ARRAY OF SORTED PRODUCTS ACCORDING TO PRICE i.e FROM SMALL TO LARGE SIZES
    const user = useSelector(state => state.user.currentUser);
    const [loading, setLoading] = useState(false);
    const [tabNo, toggleTab] = useState(1);
    const [publishedReviews, setPublishedReviews] = useState([]);
    const [reviewLoading, setReviewLoading] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const formSchema = Yup.object().shape({
      fullname: Yup.string()
      .required("The name can't be empty"),
      email: Yup.string()
      .required("Empty email address")
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "E-mail address is invalid"),
      rating: Yup.string()
      .required("Please rate this product")
      .nullable(),
      review: Yup.string()
      .required("The message text can't be empty"),
      approve: Yup.bool().oneOf([true], "Aggree with the terms above")
    });
  
    const formOptions = {
       defaultValues: {
        fullname: (user === null)? "" : `${user.lastname} ${user.firstname}`,
        email:  (user === null)? "" : user.email,

      }, 
      resolver: yupResolver(formSchema) 
    };

    const {register, handleSubmit, reset, formState: { errors }} = useForm(formOptions);

    const retrieveProductID = (size, productDetails) => {
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

    const productID = retrieveProductID(size, productDetails);

    useEffect(() => {
        if(productID !== "Select size to view Product ID"){
            const getProductReviews = async () => {
                try{
                    setLoading(true);
                    const reviews = await publicRequest.get(`/productReview/${productID}`, {timeout: 20000});

                    const filteredReviews = filterReviewsForStatusPublished(reviews.data);
                    setLoading(false);
                    setPublishedReviews(filteredReviews);
                }catch(err){
                    setLoading(false);
                    setError(true);
                    toast.error("Unable to get product reviews (501)")
                }
            };

            getProductReviews();
        }
    }, [productID])

    const setLongDescription = size => {
        const productInfo = productDetails.find(product => product.size === size);
        
        if(productDetails.length === 1){
            return `${productDetails[0].desc}`
        }else{
            if(size === ""){
                return "Select size to view description.";
            }else {
                return productInfo.desc;
            }
        }
    };

    // const setPackingOptions = size => {
    //     if(productDetails.length === 1){
    //         return `${productDetails[0].packingOptions}`
    //     }else{
    //         if(size === ""){
    //             return `Select size to view packing.`
    //         }else if(size === "small"){
    //             return `${commaListed(productDetails[0].packingOptions)}`
    //         }else if(size === "medium"){
    //             return `${commaListed(productDetails[1].packingOptions)}`;
    //         }else if(size === "large"){
    //             return `${commaListed(productDetails[2].packingOptions)}`;
    //         }
    //     }
    // };

    const setSizes = () => {
        let sizes = "";

        productDetails.forEach((product, i) => {
            if(productDetails.length === i + 1){
                sizes += `${productDetails[productDetails.length - 1].size}.`;
            }else{
                sizes += `${product.size}, `
            }
        });

        return sizes;
    };

    const displayReviews = (reviews, err) => {
        if(err){
            return (
                <ErrMessage>Could not fetch reviews, try <span className="pageRefresh" onClick={() => {window.location.reload()}}> refreshing </span> this page</ErrMessage>
            )   
        }
       if (reviews.length === 0) {
           return "There are no reviews";
        } else{
            return (
                <AllReviews productReviews={publishedReviews} />
            );
        }
    };

    const switchTab = (tabNumber) => {
        toggleTab(tabNumber);
    }

    const setReviewFormTitle = (reviews) => {
        const productInfo = productDetails.find(product => product.size === size);
        const productSize = productDetails[0].size === "No Size"? "" : (size === "")? `(${productDetails[0].size[0].toUpperCase()})` : `(${productInfo.size[0].toUpperCase()})`;

        if(productDetails[0].size === "No Size"){
            if (reviews.length !== 0){
                return `Review ${productDetails[0].productName} ${productSize}`;
            } else{
                return `Be the first to review ${productDetails[0].productName} ${productSize}`;
            }
        }else{
            if (reviews.length !== 0){
                return `Review ${productDetails[0].productName} ${productSize}`
            } else{
                return `Be the first to review ${productDetails[0].productName} ${productSize}`;
            }
        }
    };

    const onSubmit = (data) => {
        const productInfo = (productDetails.length === 1)? productDetails[0] : productDetails.find(product => product.size === size);

        if(user === null){
          dispatch(notLoggedIn());
          return;
        }else{
          const postData = {...data, firstname: user.firstname, lastname: user.lastname, productImg: productInfo.img };
          const postReview = async () => {
            try{
              setReviewLoading(true);
              await userRequest.post(`/productReview/${productInfo._id}`, postData);
              toast.success("Thanks for your review!! Awaiting approval.");
              setReviewLoading(false);
              reset();
            }catch(error){
              toast.error("Unable to post review (501)");
            }
          };
    
          postReview();
        }
    };

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
                    Review {`(${publishedReviews.length})`}
                </Tab>
            </ProductTabs>
            <ProductTabBody>
                <DescriptionContent active={tabNo === 1? true : false}>
                    <Description>
                        {setLongDescription(size)}
                    </Description>
                </DescriptionContent>
                <AdditionalInformationContent active={tabNo === 2? true : false}>
                    <Title>Additional Information</Title>
                    <AdditionalInformation>
                        {/* <PackingTypes>
                            <Label>
                                Packing
                            </Label>
                            <Info>
                                {setPackingOptions(size)}
                            </Info>
                        </PackingTypes> */}
                        <SizeTypes>
                            <Label>
                                Sizes
                            </Label>
                            <Info>
                                {setSizes()}
                            </Info>
                        </SizeTypes>
                    </AdditionalInformation>
                </AdditionalInformationContent>
                <ReviewsContent active={tabNo === 3? true : false} >
                    { (productID === "Select size to view Product ID") ? 
                        "Select size to review product"
                        :
                        <>
                            <Reviews>
                                <Title>Reviews</Title>
                                <ReviewsBody loading={loading? "loading" : "not-loading"}>
                                   { loading? <CircularProgress size="6rem"/> : displayReviews(publishedReviews, error)}
                                </ReviewsBody>
                            </Reviews>
                            <ReviewFormContainer>
                                <ReviewForm onSubmit={handleSubmit(onSubmit)}>
                                    <Title>{setReviewFormTitle(publishedReviews)}</Title>
                                    <Instructions>Your email address will not be published. Required fields are marked *</Instructions>
                                    <ReviewFormGroup>
                                        <Input {...register("fullname")} type="text" placeholder="Name *"/>
                                        {errors.fullname && <Error>{errors.fullname.message}</Error>}
                                    </ReviewFormGroup>
                                    <ReviewFormGroup>
                                        <Input {...register("email")} type="text" placeholder="Email *"/>
                                        {errors.email && <Error>{errors.email.message}</Error>}
                                    </ReviewFormGroup>
                                    <ReviewFormGroup>
                                        <RatingLabel>Your Rating *</RatingLabel>
                                        <StarRating register={register}/>
                                        {errors.rating && <Error>{errors.rating.message}</Error>}
                                    </ReviewFormGroup>
                                    <ReviewFormGroup>
                                        <TextInput {...register("review")} placeholder="Your Review *">

                                        </TextInput>
                                        {errors.review && <Error>{errors.review.message}</Error>}
                                    </ReviewFormGroup>
                                    <ValidationContainer>
                                        <ValidationInfo>
                                            <Checkbox {...register("approve")} type="checkbox"/>
                                            <ValidationText>
                                                By using this form you agree with the storage and handling of your data by this website. *
                                            </ValidationText>
                                        </ValidationInfo>
                                        {errors.approve && <Error>{errors.approve.message}</Error>}
                                        <ButtonContainer>
                                            <Button type="submit" disabled={reviewLoading}> Submit </Button>
                                        </ButtonContainer>
                                    </ValidationContainer>
                                </ReviewForm>
                            </ReviewFormContainer>
                        </>
                    }
                </ReviewsContent>   
            </ProductTabBody>
        </ProductTabContainer>
    );
}


export default ProductTab;