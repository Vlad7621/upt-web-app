import React, { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import { Container, Box, Button, Typography } from '@mui/material';
import { checkDiscord } from '../../api/auth';
import { useTelegram } from '../../hooks/useTelegram';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import discordAndUpt from '../../assets/discord-upt.png';
import styles from './styles';


const Auth: React.FC = () => {
   const { user, tg } = useTelegram();
   const navigate = useNavigate();
   const { search } = useLocation();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [isVisible, setIsVisible] = useState<boolean>(false);

   useEffect(() => {
      console.log(tg);
      setTimeout(() => setIsVisible(true), 500);
      (async () => {
         const data = await checkDiscord(user.id);
         if(!data) return;
         if(data.status) {
            setTimeout(() => navigate('/info?key=auth'), 1000);
         }
      })();
      setTimeout(() => setIsLoading(false), 2500);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const auth = () => {
      const params = new URLSearchParams(search);
      const type = params.get('type');
      window.location.href = `https://2wtdfk5n-3001.euw.devtunnels.ms/auth/discord?type=${type}&id=${user.id}`;
   }

   return (
      <>
         <Preloader isLoading={isLoading}/>
         {isVisible && <>
            <Header/>
            <Box color='#fff'>
               <Container maxWidth='xl' sx={styles.title}>
                  <Typography variant='h5' fontWeight='600'>
                     АВТЕНТИФІКАЦІЯ
                  </Typography>
                  <Typography variant='body2'>
                     Для отримання доступу необхідно пройти автентифікацію через Discord. Ми піклуємося про безпеку та якість нашої спільноти і ця процедура допоможе забезпечити ефективний обмін знаннями та інформацією
                  </Typography>
               </Container>
               <Container maxWidth='sm'>
                  <Box borderRadius='7px' pb='25px' sx={styles.auth}>
                     <Box
                        component='img'
                        src={discordAndUpt}
                        alt='discord-upt'
                        width='70%'
                     />
                     <Button
                        variant='outlined'
                        size='large'
                        sx={styles.discordBtn}
                        onClick={auth}
                     >
                        УВІЙТИ ЧЕРЕЗ DISCORD
                     </Button>
                  </Box>
               </Container>
            </Box>
            <Footer/>
         </>}
      </>
   );
};

export default Auth;