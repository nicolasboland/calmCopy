import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  user-select: none;
`;

export const CarouselInner = styled.div<{$totalItems: number; $currentItem: number;}>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease;
  @media ${props=>props.theme.devices.mobile} {
    width: ${({ $totalItems }) => `${$totalItems * 100}%`};
    transform: ${({ $currentItem, $totalItems }) => `translateX(-${$currentItem * (100 / $totalItems)}%)`};
  }
`;
