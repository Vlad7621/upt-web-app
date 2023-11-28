import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ITariff } from '../../models/ITariff';
import { useActions } from '../../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import styles from './styles';


const Tariff: React.FC<ITariff> = ({ title, description, price, type }) => {
   const [title1, title2] = Array.isArray(title) ? title : [title];
   const { setPayment } = useActions();
   const navigate = useNavigate();

   const chooseTariff = () => {
      localStorage.setItem('path', type === 'study' ? '/study' : '/private-community');
      const tariff = type === 'study' ? `Навчання(${(title as string[]).join(' ')})` : `Приватне ком'юніті(${title})`; 
      setPayment({ tariff, price });
      navigate('/payment');
   }

   return (
      <Container maxWidth='sm'>
         <Box 
            textAlign='center' 
            borderRadius='7px'
            p='20px'
            sx={styles.tariff}
         >
            <Typography
               variant='h6'
               color='#d5ad79'
               fontWeight='500'
               mb='5px'
            >
               {title1}
            </Typography>
            {title2 && <Typography
               variant='h6'
               color='#d5ad79'
               fontWeight='500'
               mb='15px'
            >
               {title2}
            </Typography>}
            <Typography 
               component='span' 
               variant='body2' 
               lineHeight='2' 
               mb='20px'
            >
               {description.map((line, i) => 
                  <Box key={i}>
                     {line}
                     {i !== description.length - 1 && <br />}
                  </Box>
               )}
            </Typography>
            <Typography
               variant='h3'
               color='#d5ad79'
               fontWeight='400'
               mb='15px'
            >
               {price} $
            </Typography>
            <Button
               variant='contained'
               size='large'
               sx={styles.tariffBtn}
               onClick={chooseTariff}
            >
               Обрати тариф
            </Button>
         </Box>
      </Container>
   );
};

export default Tariff;