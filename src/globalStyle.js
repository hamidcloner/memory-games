import styled,{createGlobalStyle} from 'styled-components';
import IranSansBold from './assets/fonts/IRAN_Sans_Bold.ttf';
import IranSansLight from './assets/fonts/IRAN_Sans_Light.ttf';
import PeydaBlack from './assets/fonts/PEYDA-BLACK.TTF';
import PeydaBold from './assets/fonts/PEYDA-BOLD.TTF';
import Shabnam from './assets/fonts/Shabnam.ttf';
import VazirBold from './assets/fonts/Vazir-Bold-FD.woff';
import VazirRegular from './assets/fonts/Vazir-Regular-FD.woff';

import breakPoints,{sizes} from './breakPoints';





const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        box-sizing : border-box;
        margin : 0;
        padding : 0;
    };
    ul,ol {
        list-style : none;
    }
    a {
        text-decoration : none;
        color : unset;
    };
    a:hover {
        color : unset;
    };
    @font-face {
        font-family : IranSansBold;
        font-weight : normal;
        src : url(${IranSansBold}) format('truetype');
    };
    @font-face {
        font-family : IranSansLight;
        font-weight : normal;
        src : url(${IranSansLight}) format('truetype');
    };
    @font-face {
        font-family : PeydaBlack;
        font-weight : normal;
        src : url(${PeydaBlack}) format('truetype');
    };
    @font-face {
        font-family : PeydaBold;
        font-weight : normal;
        src : url(${PeydaBold}) format('truetype');
    };
    @font-face {
        font-family : VazirBold;
        font-weight : normal;
        src : url(${VazirBold}) format('woff');
    };
    @font-face {
        font-family : VazirRegular;
        font-weight : normal;
        src : url(${VazirRegular}) format('woff');
    };
    @font-face {
        font-family : Shabnam;
        font-weight : normal;
        src : url(${Shabnam}) format('truetype');
    };
    html {
        font-size : 10px;
    }
    body {
        min-height : 100vh;
        font-family : VazirBold;
        background-image : linear-gradient(to bottom right,${({theme}) => theme.mainPalette.bgColor.bluePalette.a},${({theme}) => theme.mainPalette.bgColor.bluePalette.b});
        
    }

`;
export const Container = styled.div`

    border : 1px solid gray;
    ${(props) => {
        if(props.fluid){
            return `width : 100%;`;
        } else {
            return `
                max-width : 120rem;
                margin-right : auto;
                margin-left : auto;
                padding-right : 1rem;
                padding-left : 1rem;

                @media only screen and ${breakPoints.xs_device}{
                    width : 100%;
                };
                @media only screen and ${breakPoints.sm_device}{ 
                    width : 57.6rem;
                };
                @media only screen and ${breakPoints.md_device}{
                    width : 73.6rem;
                };
                @media only screen and ${breakPoints.lg_device}{
                    width : 96rem;
                };
                @media only screen and ${breakPoints.xl_device}{
                    width : 114rem;
                };
                @media only screen and ${breakPoints.xxl_device}{
                    width : 120rem;
                };


            `
        }

    }};  
`;

export const Row = styled.div`
    display : flex;
    flex-wrap : wrap;
    margin-right : -1rem;
    margin-left : -1rem;
    justify-content : center;
`;




export default GlobalStyle;




