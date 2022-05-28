import { Link } from "react-router-dom";

export const splitLink = (link, delimiter) => {
    return link.split(delimiter);
};


export const splitAndSpace = (link, delimiter) => {
   const splittedString = link.split(delimiter);
   let result = "";

   splittedString.forEach((word) => {
       result += `${word} `; 
   });

   return result;
}

export const findAndReplace = (link) => {
    let targetDir = "";

    if(link.indexOf(" ")){
        const result = link.toLowerCase().split(" ");
    
        result.forEach((word, i) => {
            if(i < (result.length - 1)){
                targetDir += `${word}-`
            }else{
                targetDir += `${word}`;
            }
        });

        return targetDir;

    }else{
        return(link.toLowerCase());
    }
};

export const findMax = (numbers) => {
    let maximum = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > maximum){
            maximum = numbers[i];
        }
    }

    return maximum;
};

export const findMin = (numbers) => {
    let minimum = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < minimum){
            minimum = numbers[i];
        }
    }

    return minimum;
};

export const generateTagLinks = (productTags) => {
    const sortedProductTags = productTags.sort();
    const sortedProductTagsLength = sortedProductTags.length;
    
    let tagLinks;

    if(sortedProductTagsLength === 1){
        tagLinks = (
            <Link to={`/product-category/${findAndReplace(sortedProductTags[0])}`} className="productTagLink">
                {sortedProductTags[0]}
            </Link>
        );
    }else if(sortedProductTagsLength === 2){
        tagLinks = (
            <>
                <Link to={`/product-category/${findAndReplace(sortedProductTags[0])}`} className="productTagLink">
                    {sortedProductTags[0]}
                </Link>,{" "}
                <Link to={`/product-category/${findAndReplace(sortedProductTags[1])}`} className="productTagLink">
                {sortedProductTags[1]}
                </Link>
            </>
        );
    }else if(sortedProductTagsLength === 3){
        tagLinks = (
            <>
                <Link to={`/product-category/${findAndReplace(sortedProductTags[0])}`} className="productTagLink">
                    {sortedProductTags[0]}
                </Link>,
                <Link to={`/product-category/${findAndReplace(sortedProductTags[1])}`} className="productTagLink">
                {sortedProductTags[1]}
                </Link>,
                <Link to={`/product-category/${findAndReplace(sortedProductTags[2])}`} className="productTagLink">
                {sortedProductTags[2]}
                </Link>
            </>
        );
    }else if(sortedProductTagsLength === 4){
        tagLinks = (
            <>
                <Link to={`/product-category/${findAndReplace(sortedProductTags[0])}`} className="productTagLink">
                    {sortedProductTags[0]}
                </Link>,{" "}
                <Link to={`/product-category/${findAndReplace(sortedProductTags[1])}`} className="productTagLink">
                {sortedProductTags[1]}
                </Link>,{" "}
                <Link to={`/product-category/${findAndReplace(sortedProductTags[2])}`} className="productTagLink">
                {sortedProductTags[2]}
                </Link>,{" "}
                <Link to={`/product-category/${findAndReplace(sortedProductTags[3])}`} className="productTagLink">
                {sortedProductTags[3]}
                </Link>
            </>
        );
    }

    return tagLinks;
}

export const commaListed = (listItems) => {
    let result = "";

    listItems.forEach((item) => {
        if(listItems.length === 1){
            result = listItems.toString();
        }else if(listItems[listItems.length - 1] === item){
            result += `${item}.`;
        }else{
            result += `${item}, `
        }
    });

    return result;
}

export const convertToDefaultProductTag = (productTag) => {
    const result = productTag.replace("-", " ");

    if(result.indexOf(" ") === -1){
        return (result.charAt(0).toUpperCase() + result.slice(1));
    }else{
        const firstLetterOfWord = result.charAt(0).toUpperCase();
        const indexOfSpace = result.indexOf(" ");
        const secondLetterOfWord = result.charAt(indexOfSpace + 1).toUpperCase();

        return (`${firstLetterOfWord}${result.slice(1, indexOfSpace)} ${secondLetterOfWord}${result.slice(indexOfSpace + 2, result.length)}`);
    }
}

export const convertToDefaultProductName = (productName) => {
    let lowercaseProductName = productName.replace(/-/g, " ");

    let words = lowercaseProductName.split(' ');  
    let capitalizedWords = [];  
    words.forEach(word => {  
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1, word.length));  
    });  

    return capitalizedWords.join(' ');
};

export const mergeSimilarProductAccToName = (productList) => {
    const productNames = [];
    const reArrangedProducts = [];
    
    productList.forEach(product => {
        if(productNames.includes(product.productName)){

        }else{
            productNames.push(product.productName);
        } 
    });

    productNames.forEach(name => {
        reArrangedProducts.push(productList.filter(product => product.productName === name));
    });
    // ******************

    reArrangedProducts.forEach(reArrangedProducts => {
        reArrangedProducts.sort((a, b) => a.price > b.price? 1 : -1);
    });

    return reArrangedProducts;
};

export const mergeSimilarProductAccToID = (productList) => {
    const productIDs = [];
    const reArrangedProducts = [];
    const totalPricesOfEachProduct = [];
    const totalQuantityOfEachProduct = [];

    productList.forEach(product => {
        if(productIDs.includes(product._id)){

        }else{
            productIDs.push(product._id);
        } 
    });

    productIDs.forEach(id => {
        reArrangedProducts.push(productList.filter(product => product._id === id));
    });

    // Get the total of each similar product
    reArrangedProducts.forEach(similarProducts => {
         // Find the total quantity of each product
        let totalQuantity = 0;
        similarProducts.forEach(product => {
            totalQuantity += product.quantity;
        });
        
        const totalPriceOfSimilarProducts = similarProducts[0].price * totalQuantity;


        totalQuantityOfEachProduct.push(totalQuantity);
        totalPricesOfEachProduct.push(totalPriceOfSimilarProducts);
    });

    return [reArrangedProducts, totalPricesOfEachProduct, totalQuantityOfEachProduct];
}

export const sortSimilarProduct = products => {
    return products.sort((a, b) => a.price > b.price? 1 : -1);
};

export const filterReviewsForStatusPublished = (reviews) => {
    return reviews.filter(review => review.status === "published");
};

export const convertToNumber = (commaSeperatedInput) => {
    return parseFloat(commaSeperatedInput.replace(/,/g, ''));
}

export const numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const capitalizeFirstLetterOfWord = (word) => {
    return word[0].toUpperCase() + word.substr(1);
};