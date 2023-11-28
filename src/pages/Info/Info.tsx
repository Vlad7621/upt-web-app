
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import logo from '../../assets/logo.svg';
import { useLocation } from 'react-router-dom';
import { useTelegram } from '../../hooks/useTelegram';
import { info } from '../../utils/info';
import styles from './styles';


type InfoKey =  'error' | 'auth' | 'discord';

const Info: React.FC = () => {
   const { tg } = useTelegram();
   const { search } = useLocation();
   const [infoKey, setInfoKey] = useState<InfoKey>('error');
   
   useEffect(() => {
      const params = new URLSearchParams(search);
      const key = params.get('key');
      if (!key || !(key in info)) return;
      setInfoKey(key as InfoKey);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const closeApp = () => tg.close();

   return (
      <Box
         height= '75vh'
         display= 'flex'
         justifyContent= 'center'
         alignItems= 'center'
         flexDirection='column'
         color='#fff'
      >
         <Box
            width='50vw'
            component='img'
            src={logo}
            mb='10px'
         />
         <Typography variant='h6' fontWeight='600'>
            {info[infoKey].title}
         </Typography>
         <Typography 
            variant='body2' 
            maxWidth='80%'
            textAlign='center'
         >
            {info[infoKey].description}
         </Typography>
         <Button
            variant='outlined' 
            sx={styles.closeBtn}
            onClick={closeApp}
         >
            {info[infoKey].button}
         </Button>
      </Box>
   );
};

export default Info;