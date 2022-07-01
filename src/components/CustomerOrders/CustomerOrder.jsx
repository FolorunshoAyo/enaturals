import React from "react";
import styled from "styled-components";
import { commaListed } from "../../usefulFunc";

const CustomerOrderContainer = styled.div`
    border: 1px solid rgb(237, 237, 237);
    border-radius: 1px;
    padding: 2rem;
    display: flex;
    height: 140px;

    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

const ProductImgContainer = styled.div`
    flex: 0 0 20%;
    display: ${props => props.greaterThanOne? "flex" : "block"};
    flex-flow: ${props => props.greaterThanOne? "row wrap" : "row nowrap"};
    margin-right: 20px;
`;

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
`;

const MultipleProductImg = styled.img`
    flex: 0 0 50%;
    height: 35px;
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

const ProductTotal = styled.p`
    margin-bottom: 2px;
    font-family: Lato, sans-serif;
`;

const TotalLabel = styled.span`
    color: #75757A;
    font-family: Lato, sans-serif;
`;

const Total = styled.span`
    color: #282828;
`;

const StatusContainer = styled.p`
    margin-bottom: 2px;
`;

const Status = styled.span`
    text-transform: uppercase;
    background-color: ${props => props.statusColor};
    color: #fff;
    border-radius: 5px;
    font-family: Lato, sans-serif;
    padding: 4px;
`;

const Date = styled.p`
    color: #282828;
    font-family: Lato, sans-serif;
    font-weight: 700;
`;



const CustomerOrder = ({ orderID, products, status, createdAt, total }) => {
    
    const formatProductsForName = (products) => {
       return products.map(product => (
            `${product.quantity}x ${product.product.productName} ${(product.product.productSize === "No Size")? "" : product.product.productSize[0].toUpperCase()}`
        ))
    };

    const getStatusColor = currStatus => {
        let status = "";
        switch (currStatus){
            case "pending":
                status = "rgba(197, 197, 0, 0.8)";
            break;
            case "confirmed": 
                status = "rgb(6, 197, 6)";
            break;
            case "on the way":
                status = "rgba(15, 86, 207, 0.8)";
            break;
            case "delivered":
                status = "rgb(86, 0, 191)";
            break;
            default:
                console.log("no other status"); 
        }

        return status;
    };

    const formatedProductList = commaListed(formatProductsForName(products));

    return(
        <CustomerOrderContainer>
            <ProductImgContainer greaterThanOne={products.length > 1}>
                {
                    (products.length === 1)?
                        <ProductImg src="../enaturals/enaturals6.jpg"/> 
                    :
                    products.map(product => (
                        <MultipleProductImg key={product._id} src={product.product.productImg} />
                    ))
                }
            </ProductImgContainer>
            <OrderDetails>
                <ProductName>{formatedProductList}</ProductName>
                <OrderID>Order {orderID}</OrderID>
                <ProductTotal>
                    <TotalLabel>Total:</TotalLabel> <Total>₦{total}</Total>
                </ProductTotal>
                <StatusContainer>
                    <Status statusColor={getStatusColor(status)}>{status === "on the way"? "delivering" : status}</Status>
                </StatusContainer>
                <Date>On {createdAt.substring(0, 10)}</Date>
            </OrderDetails>
        </CustomerOrderContainer>
    );
}



export default CustomerOrder;