import styled from "styled-components"

export const ContainerNotFound = styled.section`
  height: 100%;
`
export const ContainerImg = styled.div`
  padding-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const ContainerTitleButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0 0.5rem 0;

  @media ${({ theme }) => theme.devices.mobile} {
    margin: 1.6rem auto 1rem;
  }
`

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  margin-bottom: 6rem;
  @media ${({ theme }) => theme.devices.mobile} {
    display: flex;
    justify-content: center;
  }
`
