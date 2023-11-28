import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import logo from '../../assets/logo.svg';
import styles from './styles';
import { useTelegram } from '../../hooks/useTelegram';


interface IHeader {
   blockRef?: React.RefObject<HTMLHeadingElement>
}

const Header: React.FC<IHeader> = ({ blockRef }) => {
   const { tg } = useTelegram();

   const scrollToBlock = () => {
      blockRef?.current?.scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <Box 
         position='static' 
         minHeight={`${tg.viewportStableHeight * 0.45}px`}
         sx={styles.header}
      >
         <Container maxWidth='xl'>
            <Box 
               display='flex' 
               alignItems='center' 
               pt='16px'
               pb='20px'
            >
               <Box
                  maxWidth='15vh'
                  mr='auto'
                  component='img'
                  src={logo}
                  alt='upt-logo'
               />
               {blockRef && <Button 
                  variant='outlined' 
                  sx={styles.joinBtn}
                  onClick={scrollToBlock}
               >
                  ДОЛУЧИТИСЬ
               </Button>}
            </Box>
            <Box color='#fff'>
               <Typography 
                  variant='h4'
                  color='#d5ad79'
                  fontWeight='600'
               >
                  Ultra Profit Trade
               </Typography>
               <Typography variant='h6'>
                  твоя дорога в світ трейдингу
               </Typography>
               <Typography variant='body2'>
                  Ми навчимо вас розуміти ринки, аналізувати дані та здійснювати точні торгівельні рішення
               </Typography>
            </Box>
         </Container>
      </Box>
   );
};

export default Header;