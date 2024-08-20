import styled from "styled-components";

export const ContainerModal = styled.div`
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
`;

export const DivModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  border-radius: 12px;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 999999;
  transform: translate(-50%, -50%);
  background-color: #fff;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 300px;
  }
`;

export const VioletText = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.dullViolet};
  font-size: 0.875rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const ButtonClose = styled.button`
  position: absolute;
  cursor: pointer;
  padding: 0;
  right: 2%;
  top: 2%;
`;

export const Map = styled.iframe`
  border: none;
  border-radius: 12px;
  width: 600px;
  height: 450px;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 300px;
    height: 450px;
  }
`;
