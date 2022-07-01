import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userRequest } from "../../requestMethod";
import CustomerOrder from "./CustomerOrder";

const CustomerOrdersContainer = styled.div`

`;

const ProgressWrapper = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NoCustomerOrderError = styled.div`
    text-align: center;
    font-size: 2rem;
    font-family: Lato, sans-serif;
    padding: 4rem 0;
`;

const CustomerOrders = () => {
    const user = useSelector(state => state.user.currentUser);
    const [customerOrders, setCustomerOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCustomerOrders = async () => {
            try{
                setLoading(true);
                const res = await userRequest.get(`/orders/find/${user._id}`);
                setCustomerOrders(res.data);
                setLoading(false);
            }catch(error){
                toast.error("Unable to get customer orders (501)");
            }
        };

        getCustomerOrders();
    }, []);

    return (
        <CustomerOrdersContainer>
            {
                (loading)?
                <ProgressWrapper>
                    <CircularProgress size="8rem" />
                </ProgressWrapper>
                :
                (customerOrders.length === 0)?
                <NoCustomerOrderError>
                    No orders yet
                </NoCustomerOrderError>
                :
                customerOrders.map(customerOrder => (
                    <CustomerOrder 
                        key={customerOrder._id}
                        orderID={customerOrder._id}
                        products={customerOrder.products}
                        status={customerOrder.status}
                        createdAt={customerOrder.createdAt}
                        total={customerOrder.amount}
                    />
                ))
            }
        </CustomerOrdersContainer>
    );
};


export default CustomerOrders;