import React, { useEffect, useRef, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Container, Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { settings } from '../../utils/slider';
import { images, tariffs } from '../../utils/privateCommunity';
import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';
import Tariff from '../../components/Tariff/Tariff';
import Footer from '../../components/Footer/Footer';
import styles from './styles';
import { useTelegram } from '../../hooks/useTelegram';


const PrivateCommunity: React.FC = () => {
   const { tg } = useTelegram();
   const { imagesLoaded } = useAppSelector(state => state.imagesReducer);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const blockRef = useRef(null);

   useEffect(() => {
      if(imagesLoaded === images.length - 2) {
         setTimeout(() => setIsLoading(false), 1000);
      }
   }, [imagesLoaded]);

   useEffect(() => {
      tg.BackButton.hide();
      setTimeout(() => setIsVisible(true), 500);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <Preloader isLoading={isLoading}/>
         {isVisible && <>
            <Header blockRef={blockRef}/>
            <Box color='#fff'>
               <Container maxWidth='xl' sx={styles.privateCommunity}>
                  <Typography variant='h5' fontWeight='600'>
                     СЕРЕДОВИЩЕ
                  </Typography>
                  <Typography width='80%' variant='body2'>
                     Структура побудована з урахуванням всіх деталей
                  </Typography>
               </Container>
               <Presentation images={images} blockRef={blockRef}/>
               <Container maxWidth='xl' sx={styles.tariffs}>
                  <Typography variant='h5' fontWeight='600'>
                     ТАРИФИ ДОСТУПУ
                  </Typography>
                  <Typography width='80%' variant='body2'>
                     Спільнота для ексклюзивних можливостей та обміну знаннями
                  </Typography>
               </Container>
               <Slider {...settings}>
                  {tariffs.map((tariff, i) => <Tariff key={i} {...tariff}/>)}
               </Slider>
            </Box>
            <Footer/>
         </>}
      </>
   );
};

export default PrivateCommunity;