import React from "react";
import MajorProduct from "./MajorProduct";
// import { findMax, findMin } from "../../usefulFunc";


const RearrangeMajorProducts = ({rearrangedProducts}) => {

    return (
        <>
        {
            rearrangedProducts.map((similarProducts) => {
                let eachSimilarProducts = similarProducts;

                if(similarProducts.length === 1){
                    const product = similarProducts[0];
                    return (
                        <MajorProduct 
                            key={product._id}
                            productInfo={product}
                            productID={product._id}
                            productImage={product.img}
                            price={product.price}
                            description={product.desc}
                            productName={product.productName}
                            size={product.size}
                            inStock={product.inStock}
                            discounted={product.discount}
                            discountPrice={product.discountPrice}
                            productTags={product.categories}
                        />
                    );

                }else{
                    const productSizes = eachSimilarProducts.map(
                        (product) => product.size
                    );

                    // const productPrices = eachSimilarProducts.map(
                    //     (product) => product.discount? product.discountPrice : product.price
                    // );

                    const isAllSimilarProductsOutOfStock = !eachSimilarProducts.every(similarProduct => similarProduct.inStock === false);
        
                    // const maxAndMinPrice = [
                    //     findMin(productPrices),
                    //     findMax(productPrices),
                    // ];

                    return (
                        <MajorProduct 
                            key={similarProducts[0]._id}
                            productImage={similarProducts[0].img}
                            price={similarProducts}
                            description={similarProducts[0].desc}
                            productName={similarProducts[0].productName}
                            size={productSizes}
                            productTags={similarProducts[0].categories}
                            discounted={similarProducts.map(product => product.discount)}
                            discountedPrice={""}
                            inStock={isAllSimilarProductsOutOfStock}
                        />
                    );

                }
            })
        }
        </>
    );
};


export default RearrangeMajorProducts;