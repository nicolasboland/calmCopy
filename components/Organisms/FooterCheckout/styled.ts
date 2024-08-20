import { styled } from "styled-components";

export const FooterCheckoutContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.orangePop};
  justify-content: space-evenly;
  padding: 40px 0;

  @media ${({ theme }) => theme.devices.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;