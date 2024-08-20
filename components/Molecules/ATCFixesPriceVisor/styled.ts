import styled from 'styled-components';

export const Container = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
`;

export const InfoContainer = styled.div<{ $isCategory?: boolean }>`
   display: flex;
   flex-direction: ${props => props.$isCategory ? "column" : "row"};
   ${props => !props.$isCategory && " align-items: center"};
   flex-wrap: wrap;
`;

export const SizeContainer = styled.div<{ $isCategory?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 4px 0 0;
  gap: 4px;
`