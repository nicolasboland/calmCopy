import { useEffect } from 'react';
import { DivContainerQuizz, DivQuizz, DivUnit } from "./styled"
import { IPropsChildrens } from '../types';
import Images from '@/components/Atoms/Images/Images';
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import Text from '@/components/Atoms/Typography/Text';

const Quizz = (props: IPropsChildrens)  => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <DivContainerQuizz $quizzActive={props.modal} ref={props.modalRef}>
      <DivQuizz ref={props.modalRefChildren} data-tf-widget="FB7U3xzq" data-tf-opacity="100" data-tf-iframe-props="title=Quiz Almohadas" data-tf-transitive-search-params data-tf-medium="snippet" style={{ width: '80%', height: '80%' }}></DivQuizz>
    </DivContainerQuizz>
  );
};

export const QuizzUnit = (props : IPropsChildrens) => {
  return(
  <DivUnit onClick={props.modalHandle} $isfromNavBar={props.isfromNavBar}>
      <Images 
          src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8ef34e54-e4e1-490b-b2fe-632ed60b3200/fit=cover"
          alt="quiz"
          width={props.isfromNavBar ? "240px" : "100%"}
          height={props.isfromNavBar ? "139px" : "auto"}
          borderRadius='10px'
      />
      {
        !props.isfromNavBar ? (
          <>
            <Margin margin="10px" />

            <Text
            font='regular'
            color='offBlack'
            fontSize='1.1em'
            align='left'
            responsiveMobile={{
                fontSize:"1.4em"
            }}>
              Encontrá tu&nbsp;
            <Text
                textTag='span'
                font='extraBold'>
                    almohada ideal
            </Text>
            </Text>
          </>
        ) : (
          <>
          <Margin margin="10px" />

          <Text
          font='bold'
          color='offBlack'
          fontSize='.9em'
          align='left'
          responsiveMobile={{
              fontSize:"1.4em"
          }}>
            Encontrá tu almohada ideal →
          </Text>
        </>
        )

      }

      {
        !props.isfromNavBar && (
          <>
           <Margin margin="5px" />
           
          <Text
              font='regular'
              fontSize='0.8em'
              color='millionGray'
              align='left'
              responsiveMobile={{
                  fontSize:"1em"
            }}>no te va a llevar más de 5 minutos</Text>
          </>
        )
      }
     
  </DivUnit>
  )
}

export default Quizz;