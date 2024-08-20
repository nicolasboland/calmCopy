import React, { useState, useEffect, ReactNode } from 'react';
import { CarouselContainer, CarouselInner } from './styled'

interface IProps {
  items: ReactNode[]
}

const BenefitsBannerCarousel = ({items}: IProps) => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevState) => (prevState === items.length - 1 ? 0 : prevState + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  return (
    <CarouselContainer>
      <CarouselInner $totalItems={items.length} $currentItem={currentItem}>
      {items.map((item: ReactNode, index: number) => (
        <React.Fragment key={index}>
          {item}
        </React.Fragment>
      ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default BenefitsBannerCarousel;
