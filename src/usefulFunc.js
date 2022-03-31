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
    const result = link.toLowerCase().split(" ");
    
    result.forEach((word, i) => {
        if(i < (result.length - 1)){
            targetDir += `${word}-`
        }else{
            targetDir += `${word}`;
        }
    });

    return targetDir;
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