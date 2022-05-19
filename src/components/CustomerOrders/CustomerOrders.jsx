import React from "react";
import styled from "styled-components";

const CustomerOrdersContainer = styled.div`

`;

const CustomerOrder = styled.div`
    border: 1px solid rgb(237, 237, 237);
    border-radius: 1px;
    padding: 2rem;
    display: flex;
    height: 140px;
`;

const ProductImgContainer = styled.div`
    flex: 0 0 20%;
    margin-right: 20px;
`;

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
`;

const OrderDetails = styled.div`
    flex: 1;
`;

const ProductName = styled.h2`
    color: #282828;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    margin-bottom: 2px;
`;

const OrderID = styled.p`
    color: #75757A;
    font-family: Lato, sans-serif;
    margin-bottom: 2px;
`;

const ProductSize = styled.p`
    margin-bottom: 2px;
    font-family: Lato, sans-serif;
`;

const SizeLabel = styled.span`
    color: #75757A;
    font-family: Lato, sans-serif;
`;

const Size = styled.span`
    color: #282828;
`;

const StatusContainer = styled.p`
    margin-bottom: 2px;
`;

const Status = styled.span`
    text-transform: uppercase;
    background-color: #6dbd28;
    color: #fff;
    border-radius: 5px;
    font-family: Lato, sans-serif;
    padding: 4px;
`;

const DeliveryDate = styled.p`
    color: #282828;
    font-family: Lato, sans-serif;
    font-weight: 700;
`;




const CustomerOrders = () => {
    return (
        <CustomerOrdersContainer>
            <CustomerOrder>
                <ProductImgContainer>
                    <ProductImg src="../enaturals/enaturals6.jpg"/> 
                </ProductImgContainer>
                <OrderDetails>
                    <ProductName>Hot Choco Lotion (S)</ProductName>
                    <OrderID>Order 65d123456779</OrderID>
                    <ProductSize>
                        <SizeLabel>Size:</SizeLabel> 
                        <Size>M</Size>
                    </ProductSize>
                    <StatusContainer>
                        <Status>Delivered</Status>
                    </StatusContainer>
                    <DeliveryDate>On 15 - 12</DeliveryDate>
                </OrderDetails>
            </CustomerOrder>
        </CustomerOrdersContainer>
    );
};


export default CustomerOrders;