import styled from "styled-components";

export const Container = styled.section`
    background-image: url(https://calmessimple.com.ar/wp-content/uploads/2024/04/1920x706px_PreHotSale_Desktop.webp);
    background-position: center left;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(70vh - 90px);

    @media ${props => props.theme.devices.mobile} {
        background-image: url(https://calmessimple.com.ar/wp-content/uploads/2024/04/360x645px_PreHotSale_Desktop.webp);
        background-position: center center;
        background-repeat: no-repeat;
        height: calc(80vh - 40px);
    }
`

export const Information = styled.div`
    width: 35%;
    display: flex;
    padding: 5% 0 0 5%;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;

    @media ${props => props.theme.devices.mobile} {
        width:  100%;
        padding: 5% 5% 0 5%;
        height: 95%;
    }
`

export const DescriptionInput = styled.div`

`