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

`;




export default GlobalStyle;