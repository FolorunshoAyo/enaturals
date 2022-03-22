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