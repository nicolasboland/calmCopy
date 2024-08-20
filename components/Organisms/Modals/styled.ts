import styled from "styled-components";
import { theme } from "@/utils/Theme";

export const DivButtonModal = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 0 0 0 1px;
  border-color: ${theme.colors.kinglyCloud};
`;

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
  border-radius: 12px 12px 12px 12px;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 999999;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  padding: 20px;

  @media ${theme.devices.mobile} {
    width: 300px;
  }
`;

export const TextModal = styled.div`
  margin-top: 3px;
`;

export const DividorModal = styled.div`
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${theme.colors.explosiveGray};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TextContentModal = styled.div`
  padding-top: 5px;
`;

export const DivImg = styled.div`
  padding: 10px 10px 0px 0;
`;

export const ButtonCloseDiv = styled.div`
  float: right;
  cursor: pointer;
  color: ${theme.colors.millionGray};
  border: none;
  background: none;
  padding: 0;
`;