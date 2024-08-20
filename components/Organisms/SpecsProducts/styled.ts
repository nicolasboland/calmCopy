import styled from "styled-components";
import { theme } from "@/utils/Theme";

export const LandingContent = styled.div`
    padding: 0% 10.5% 0% 10.5%;
  @media ${theme.devices.mobile} {
    padding: 0% 4% 0% 4%;
  }
  @media ${theme.devices.middleResolutionDesktop} {
    margin: auto;
  }
`

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    @media ${props => props.theme.devices.mobile} {
        margin: 10px 0;
    }
`;


export const Container = styled.div<{ $isRadiography?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.devices.mobile} {
        flex-direction: ${props => props.$isRadiography ? "column" : "column-reverse"};
    }
`;

export const SpecsWrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const TableWrapper = styled.div`
    width: 70%;
    margin: auto;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const Row = styled.div<{$isSize?: boolean, $isOnlyTitle?: boolean}>`
    display: flex;
    justify-content: space-between;
    position: relative;
    ${props => !props.$isOnlyTitle && `border-bottom: solid 1px ${props.theme.colors.millionGray};`}
    padding: ${props => props.$isSize ? "1em" : "1em 0"};
    ${props => !props.$isSize && "flex-direction: column;"}
`;

export const ImageWrapper = styled.div`
    width: 55%;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const ContainerDescription = styled.div<{ $isRadiography?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 1em;
    text-align: left;
    letter-spacing: 0.28px;
    @media ${props => props.theme.devices.mobile} {
        text-align: left;
        width: 100%;
        letter-spacing: 0.28px;
    }
`;