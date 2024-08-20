import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 8px 10px 7px -7px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 8px 10px 7px -7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 8px 10px 7px -7px rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  padding: 1.2rem 1.2rem;
  margin: 1rem 0.3rem;
  width: calc(33.33% - 20px);
  background: #fbfbfb;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  &:nth-last-child(-n + 2) {
    width: calc(50% - 20px);
  }

  h4 {
    color: ${props => props.theme.colors.decorYellow};
    font-family: ${props => props.theme.fonts.light};
    font-size: 1.2rem;
    margin: 0.7rem 0.7rem 0.7rem 0;
  }
  p {
    color: ${props => props.theme.colors.steel};
    font-family: ${props => props.theme.fonts.regular};
    font-size: 0.81rem;
    line-height: 1.8;
    text-align: left;
  }
  ul {
    color: ${props => props.theme.colors.steel};
    font-family: ${props => props.theme.fonts.regular};
    font-size: 0.81rem;
    line-height: 1.8;
    text-align: left;
    margin-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(50% - 20px);
    min-height: 2rem;

    &:nth-last-child(-n + 1) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0.5rem;
    margin-left: 0;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.7rem;
    min-height: 2rem;

    &:nth-child(3n + 1) {
      width: 100%;
      margin-left: 0;
    }

    &:nth-last-child(-n + 2) {
      width: 100%;
      margin-left: 0;
    }
    h4 {
      font-size: 1rem;
      text-align: center;
    }

    p {
      text-align: center;
    }

    ul {
      margin-left: 40px;
    }
  }
`;