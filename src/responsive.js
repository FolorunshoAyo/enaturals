import {css} from 'styled-components';


// BREAKPOINTS
/* 
breakpoint-1: > 1800px;
breakpoint-2: < 1800px;
breakpoint-3: < 1200px;
breakpoint-4: < 1100px;
breakpoint-5: < 1023px;
breakpoint-6: < 900px;
breakpoint-7: < 860px;
breakpoint-8: < 750px;
breakpoint-9: < 700px;
breakpoint-10: < 600px;
breakpoint-11: < 480px;
breakpoint-12: < 400px;

*/

// < 400px
export const smallPhone = (props) => {
    return css`
        @media only screen and (max-width: 25em){
            ${props}
        }
    `;   
}

// < 480px
export const res480 = (props) => {
    return css`
        @media only screen and (max-width: 30em){
            ${props}
        }
    `;   
}

// < 600px
export const medPhone = (props) => {
    return css`
        @media only screen and (max-width: 37.5em){
            ${props}
        }
    `;
};

// < 700px
export const res700 = (props) => {
    return css`
        @media only screen and (max-width: 43.75em){
            ${props}
        }
    `;
}

// < 750px
export const res750 = (props) => {
    return css`
        @media only screen and (max-width: 46.875em){
            ${props}
        }
    `;
}
// < 860px
export const res860 = (props) => {
    return css`
        @media only screen and (max-width: 53.75em){
            ${props}
        }
    `;
}

// < 900px
export const tabPort = (props) => {
    return css`
        @media only screen and (max-width: 56.25em){
            ${props}
        }
    `;
};

// < 1023px
export const res1023 = (props) => {
    return css`
        @media only screen and (max-width: 64em){
            ${props}
        }
    `;
}

// 1100px
export const res1100 = (props) => {
    return css`
        @media only screen and (max-width: 68.75em){
            ${props}
        }
    `;
}

// < 1200px
export const tabLand = (props) => {
    return css`
        @media only screen and (max-width: 75em){
            ${props}
        } 
    `;
}

// < 1800px
export const medDesktop = (props) => {
    return css`
        @media only screen and (max-width: 112.5em){
            ${props}
        }
    `;
}

// > 1800px
export const bigDesktop = (props) => {
    return css`
        @media only screen and (min-width: 112.5em){
            ${props}
        }
    `;
};