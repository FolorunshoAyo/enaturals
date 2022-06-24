import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeProduct } from "../../redux/cartRedux";
import { res700 } from "../../responsive";
import CloseIcon from '@mui/icons-material/Close';
import { findAndReplace } from "../../usefulFunc";
import { Link } from "react-router-dom";

const TableRow = styled.tr`
    height: 80px;
    border-bottom: 1px solid #b8a398; 
`;

const TableCell = styled.td`
`;

const Close = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;

    ${res700({justifyContent: "flex-start"})}
`;

const ProductImageContainer = styled.div`
    flex: 0 0 20%;

    ${res700({display: "none"})}
`;

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductName = styled.div`
    flex: 0 0 75%;
    align-self: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-family: Lato, sans-serif;

    ${res700({flex: "1", fontSize: "1.2rem"})}
`;

const Price = styled.div`   
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
`;

const Quantity = styled.div`
    display: flex;
    height: 40px;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
`;

const SubTotal = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
`;


const CartTableRows = ({ productID, productImg, productName, priceOfProduct, quantity, totalPrice}) => {
    const dispatch = useDispatch();

    const handleCartRemoval = () => {
        dispatch(removeProduct({ productID, quantity, price: priceOfProduct}));
        toast.success(`"${productName}" removed.`);
    };

    const modProductName = findAndReplace(productName);

    return (
        <TableRow>
            <TableCell>
                <Close onClick={handleCartRemoval}>
                    <CloseIcon />
                </Close>
            </TableCell>
            <TableCell>
                <Product>
                    <ProductImageContainer>
                        <ProductImg src={productImg}/>
                    </ProductImageContainer>
                    <ProductName>
                        <Link to={`/product/${modProductName}`} className="cartTableLink">
                            {productName}
                        </Link>
                    </ProductName>
                </Product>
            </TableCell>
            <TableCell>
                <Price>
                    ₦{priceOfProduct}
                </Price>
            </TableCell>
            <TableCell>
                <Quantity>
                    {quantity}
                </Quantity>
            </TableCell>
            <TableCell>
                <SubTotal>
                    ₦{totalPrice}
                </SubTotal>
            </TableCell>
        </TableRow>
    );
};



export default CartTableRows;