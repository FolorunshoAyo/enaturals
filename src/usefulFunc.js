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