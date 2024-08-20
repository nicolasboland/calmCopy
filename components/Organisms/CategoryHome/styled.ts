import styled from "styled-components"

export const CategoryHomeContainer = styled.section`
  margin: 35px 0;
`

export const DivTitle = styled.div`
  overflow: hidden;
  margin: 0 auto;
  letter-spacing: -0.3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: 0;
    font-size: 1.7em;
    display: block;
  }
`

export const DivImages = styled.div`
  padding: 0% 11.5%;
  display: flex;

  @media ${(props) => props.theme.devices.mobile} {
    flex-wrap: wrap;
  }
  @media (max-width: 1023px) {
    padding: 3%;
  }
`

export const RowImages = styled.div`
  width: 67%;
  display: flex;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
  }
`

export const ColumnImages = styled.div`
  width: 32.99%;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
    flex-direction: row;
  }
`
