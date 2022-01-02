import React from 'react';
import styled from 'styled-components';
import { kitImages } from "../../data";
import {smallPhone, medPhone, res700} from '../../responsive';

const Container = styled.div`
    margin-bottom: 5rem;
    padding: 6rem 5rem;
`;

const KitsWrapper = styled.div`
    padding: 0 2rem; 

    ${smallPhone({width: "80%", margin: "0 auto"})}
`;

const FirstKit = styled.div`
    height: 450px;
    display: flex;

    ${res700({height: "700px", flexDirection: "column", marginBottom: "4rem"})}
`;

const SecondKit = styled.div`
    height: 450px;
    display: flex;

    ${res700({height: "700px", flexDirection: "column"})}
`;

const KitInfoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2eeec;
`;

const KitInfo = styled.div`
    text-align: center;
    width: 70%;
    padding: 3rem 0;
`;

const KitName = styled.div`
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    color: #4b5354; 

    ${medPhone({fontSize: "2.5rem"})}
`;

const KitDescription = styled.div`
    margin: 45px 0;
    font-size: 1.5rem;
    color: #7e8485;

    ${res700({margin: "30px 0"})}
`;

const KitImage = styled.div`
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
`;

const Button = styled.button`
    padding: 1.6rem 3.2rem;
    background-color: transparent;
    border: 2px solid #B092B0;
    text-transform: uppercase;
    color: #B092B0;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-color: #B092B0;
        color: #fff;
    }

    ${smallPhone({padding: "1.4rem 2.5rem", fontSize: "1.4rem"})}
`;

const SkincareKits = () => {

    return (
        <Container>
            <KitsWrapper>
                <FirstKit>
                    <KitInfoContainer>
                        <KitInfo>
                            <KitName>
                                e-naturals lightening kit
                            </KitName>
                            <KitDescription>
                            Handmade soap is exactly that made by hand. 
                            They are made with vegetable oil and/or animals
                             fats for their skin care properties. The soapmaker 
                             will often include additives to the soap for their 
                             healing, exfoliating and esthetic properties.
                            </KitDescription>
                            <Button>Shop Products</Button>
                        </KitInfo>
                    </KitInfoContainer>
                    <KitImage bg={kitImages.kitImg1}>
                        {/* Background Image */}
                    </KitImage>
                </FirstKit>
                <SecondKit>
                    <KitImage bg={kitImages.kitImg2}>
                        {/* Background Image */}
                    </KitImage>
                    <KitInfoContainer>
                        <KitInfo>
                            <KitName>
                                e-naturals dark skinned kit
                            </KitName>
                            <KitDescription>
                                    A brief description of blablaba 
                                    aabaubscye buehue iufhead lablablabal 
                                    dhvsdvsdvsaudddcd scdadsvdv dogavg ad
                            </KitDescription>
                            <Button>Shop Products</Button>
                        </KitInfo>
                    </KitInfoContainer>
                </SecondKit>
            </KitsWrapper>
        </Container>
    );
}


export default SkincareKits;