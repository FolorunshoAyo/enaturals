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

export const commaListed = (listItems) => {
    let result = "";

    listItems.forEach(item => {
        if(listItems.length > 1){
            result = listItems.toString;
        }else{
            result += `${item}, `;
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

    console.log(productName, lowercaseProductName);

    let words = lowercaseProductName.split(' ');  
    let capitalizedWords = [];  
    words.forEach(word => {  
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1, word.length));  
    });  

    return capitalizedWords.join(' ');
};

export const mergeSimilarProduct = (productList) => {
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

export const sortSimilarProduct = products => {
    products.forEach(reArrangedProducts => {
        reArrangedProducts.sort((a, b) => a.price > b.price? 1 : -1);
    });
};

export const convertToNumber = (commaSeperatedInput) => {
    return parseFloat(commaSeperatedInput.replace(/,/g, ''));
}