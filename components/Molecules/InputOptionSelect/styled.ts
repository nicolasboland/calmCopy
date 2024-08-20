import styled from "styled-components"

export const OptionsContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  top: 60px;
  left: 0;
  width: 100%;
  overflow-y: auto;
  max-height: 250px;
  display: grid;
  grid-template-columns: 1fr;
  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`

export const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lynxWhite};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 14px;
  }
`

export const FormLabel = styled.label`
  font-size: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 6px;
`
export const SelectContainer = styled.select`
  width: 100%;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  padding: 15px;
  font-size: 0.9rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.millionGray};
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.yellowCalm};
  };
`

export const OptionSelectContainer = styled.option`
  width: 100%;
`
