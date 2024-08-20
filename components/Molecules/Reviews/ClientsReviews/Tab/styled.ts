import styled from "styled-components";

export const DivTab = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SelectedCategory = styled.label`
  color: ${props => props.theme.colors.millionGray};
  font-size: 0.8em;
  font-family: ${props => props.theme.fonts.extraBold}, "Arial";
  font-weight: 600;
  cursor: pointer;
  padding: 15px;

  @media ${props => props.theme.devices.mobile} {
    padding: 5px;
    text-align: center;
  }
`;

export const Category = styled.input`
  display: none;
  cursor: pointer;

  &:checked + ${SelectedCategory} {
    border-style: solid solid none;
    border-color: ${props => props.theme.colors.steam};
    border-width: 1px;
    border-bottom: 2px solid  white;
    color: ${props => props.theme.colors.yellowCalm};
  }

  font-size: 16px;

&[type="color"],
&[type="date"],
&[type="datetime"],
&[type="datetime-local"],
&[type="email"],
&[type="month"],
&[type="number"],
&[type="password"],
&[type="search"],
&[type="tel"],
&[type="text"],
&[type="time"],
&[type="url"],
&[type="week"],
&:focus,
&::placeholder {
  font-size: 16px;
}
`;
