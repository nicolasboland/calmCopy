import styled, { css } from "styled-components";

export const pureCSS = css`
    @import "https://d19ayerf5ehaab.cloudfront.net/css/product-widget/style.css";
    .reviews-popup,html.reviews-popup {
        overflow: hidden!important;
        height: 100%!important
    }

    .ruk_rating_snippet {
        color: #67c116;
        margin: 0.3rem 0;

        @media ${props => props.theme.devices.mobile} {
            margin: 0.1rem 0;
        }
    }

    .ruk_rating_snippet .ruk-rating-snippet-count {
        color: #c4c4c4!important;
        font-size: 1em;
        position: relative;
        bottom: 2px;
        font-family: ${(props) => props.theme.fonts.regular};
        @media ${props => props.theme.devices.mobile} {
            font-size: 0.7em;
        }
    }

    .ruk_rating_snippet i {
        font-size: 1.3rem;
        line-height: 22px;
        cursor: pointer;
        @media ${props => props.theme.devices.mobile} {
            font-size: 1rem;
        }
    }

    #reviews_fade {
        background: rgba(0,0,0,.7);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        overflow: auto;
        padding: 10px;
        z-index: 5989!important
    }

    #reviews_fade.iphone iframe {
        max-height: 90%!important;
        pointer-events: none!important
    }

    #reviews_container {
        margin-top: 10px;
        position: absolute;
        margin: 0 auto;
        max-width: 700px;
        margin: 20px auto;
        background: #fff;
        left: 10px;
        right: 10px;
        padding: 10px 0;
        border-radius: 2px
    }

    #reviews_container .close {
        background-color: #1b1b1b;
        border-radius: 20px;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        height: 25px;
        left: -12px;
        line-height: 25px;
        position: absolute;
        text-align: center;
        top: -13px;
        width: 25px;
        z-index: 100
    }

    #reviews_container .close:hover {
        background: #fff;
        color: #000
    }

    #reviews_containers .close span {
        font-size: 12px
    }

    #reviews_widget {
        margin: 0 15px
    }


    .R-TextHeading {
        font-family: 'Gilroy-medium' !important;
        color: var(--text_color) !important;
        text-transform: uppercase !important;
        letter-spacing: 0.5px !important;
    }

    .stars__icon--100 {
        background-image: linear-gradient(to right, #5700aa 99.9%, #5700aa 100%) !important;
    }

    .stars__icon--75 {
        background-image: linear-gradient(to right,#5700aa 60%,rgb(179, 179, 179) 60.1%) !important;
    }

    .R-TextBody--xs {
        font-family: 'Gilroy-regular' !important;
        font-size: 1em !important;
    }

    .R-SliderIndicator__bg {
        background-color: #F5A203 !important;
    }

    .R-SliderIndicator__button {
        background-color: #5700aa !important;
    }

    .R-TextBody {
        font-family: 'Gilroy-medium' !important;
    }

    .R-Button--primary {
        background-color: #F5A203 !important;
        font-family: 'Gilroy-medium' !important;
        text-transform: uppercase !important;
        border: none !important;
    }

    .R-MediaSlider__scrollButton{
        background-color: #F5A203 !important;
    }

    .R-TextHeading {
        font-family: 'Gilroy-extraBold' !important;
        text-transform: lowercase !important;
    }

    .R-TextHeading::first-letter{
        text-transform: uppercase !important;
    }

    .R-Field__icon{
        color: #999999 !important
    }

    .R-Field__input{
        font-family: 'Gilroy-medium' !important;
        color: #999999 !important
    }
    .R-Field__input::placeholder{
        color: #999999 !important
    }

    .R-AvatarThumbnail__inner {
        background-color: #F5A203 !important;
        color: white !important
    }

    .cssVar-badgeElement__icon {
        color: #F5A203 !important;
    }

    .cssVar-badgeElement__text {
        text-transform: uppercase !important;
        color: #F5A203 !important;
    }
`;

export const Wrapper = styled.div<{ $scriptLoaded?: boolean }>`
   /*  display: ${props => props.$scriptLoaded ? "block" : "none"}; */
    ${pureCSS}
`;