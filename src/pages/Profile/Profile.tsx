import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Menu, MenuItem, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import Preloader from '../../components/Preloader/Preloader';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import arrow from '../../assets/arrow.svg';
import more from '../../assets/more.svg';
import { getPayments } from '../../api/profile';
import { useTelegram } from '../../hooks/useTelegram';
import { IPayment } from '../../models/IPayment';
import { formatDate } from '../../utils/date';
import styles from './styles';


const Profile: React.FC = () => {
   const { user } = useTelegram();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [payments, setPayments] = useState<[string, IPayment][]>([]);
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const [filter, setFilter] = useState({ confirm: true, reject: true, awaiting: true });

   useEffect(() => {
      setTimeout(() => setIsVisible(true), 500);
      (async () => {
         const data = await getPayments(user.id);
         if(!data) return;
         const paymentsArr = Object.entries(data);
         paymentsArr.sort((a, b) => b[1].timestamp - a[1].timestamp);
         setPayments(paymentsArr);
      })();
      setTimeout(() => setIsLoading(false), 1500);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const openFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const closeFilter = () => setAnchorEl(null);
   
   const changeFilter = (key: 'confirm' | 'reject' | 'awaiting') => {
      setFilter(prevState=> ({ ...prevState, [key]: !filter[key] }));
   }
  
   return (
      <>
         <Preloader isLoading={isLoading}/>
         {isVisible && <>
            <Header/>
            <Box color='#fff'>
               <Container maxWidth='sm'>
                  <Box display='flex'>
                     <Typography 
                        variant='h5' 
                        fontWeight='600' 
                        p='8px' 
                        mr='auto'
                     >
                        Історія платежів
                     </Typography>
                     <IconButton onClick={openFilter}>
                        <Box component='img' src={more}/>
                     </IconButton>
                  </Box>
                  <Menu
                     anchorEl={anchorEl}
                     open={!!anchorEl}
                     PaperProps={{ sx: styles.menu }}
                     onClose={closeFilter}
                  >
                     <MenuItem>
                        <FormControlLabel 
                           control={<Checkbox/>} 
                           label='Підтверджено'
                           checked={filter.confirm}
                           onChange={changeFilter.bind(null, 'confirm')}
                        />
                     </MenuItem>
                     <MenuItem>
                        <FormControlLabel 
                           control={<Checkbox/>} 
                           label='Відхилено'
                           checked={filter.reject}
                           onChange={changeFilter.bind(null, 'reject')}
                        />
                     </MenuItem>
                     <MenuItem>
                        <FormControlLabel 
                           control={<Checkbox/>} 
                           label='Очікує перевірки' 
                           checked={filter.awaiting}
                           onChange={changeFilter.bind(null, 'awaiting')}
                        />
                     </MenuItem>
                  </Menu>
                  <Box maxHeight='300px' sx={{ overflowY: 'auto' }}>
                     {payments.map(payment => {
                        const paymentId = payment[0];
                        const { tariff, way, price, status, timestamp } = payment[1];
                        if(status === 'Підтверджено' && !filter.confirm) return null;
                        if(status === 'Відхилено' && !filter.reject) return null;
                        if(!status && !filter.awaiting) return null;
                        return <Accordion key={paymentId} sx={styles.paymentsHistory}>
                           <AccordionSummary
                              expandIcon={
                                 <Box component='img' src={arrow}/>
                              }
                           >
                              <Typography fontWeight='600'>{paymentId}</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                              <Typography variant='body2'>
                                 <b>Вибраний тариф:</b> {tariff}<br/>
                                 <b>Спосіб оплати:</b> {way}<br/>
                                 <b>Сума до оплати:</b> {price}$<br/>
                                 <b>Статус:</b> {status ? status : 'Очікує перевірки'}<br/>
                                 <b>Дата:</b> {formatDate(timestamp)}
                              </Typography>
                           </AccordionDetails>
                        </Accordion>
                     })}
                  </Box>
               </Container>
            </Box>
            <Footer/>
         </>}
      </>
   );
};

export default Profile;