import React, { useEffect, useState } from 'react';
import { Box, FormControl, Container, TextField, Typography, InputLabel, Select, MenuItem, SelectChangeEvent, Button, Snackbar, Alert } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import wallet from '../../assets/wallet.jpg';
import { useTelegram } from '../../hooks/useTelegram';
import Preloader from '../../components/Preloader/Preloader';
import { useNavigate } from 'react-router-dom';
import { checkPhone, createPayment } from '../../api/payment';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './styles';


type Way = 'crypto' | 'bank';

const Payment: React.FC = () => {
   const navigate = useNavigate();
   const { tg, user } = useTelegram();
   const { tariff, price } = useAppSelector(state => state.paymentReducer);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [way , setWay] = useState<Way>('crypto');
   const [open, setOpen] = useState<boolean>(false);

   useEffect(() => {
      setTimeout(() => setIsVisible(true), 500);
      const path = localStorage.getItem('path') as string;
      if(!tariff) navigate(path);
      tg.BackButton.show();
      tg.BackButton.onClick(() => navigate(path));
      return () => {
         tg.BackButton.offClick(() => navigate(path));
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const changePaymentWay = (event: SelectChangeEvent<Way>) => setWay(event.target.value as Way);

   const closeAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') return;
      setOpen(false);
   };

   const handleImageLoad = () => {
      setTimeout(() => setIsLoading(false), 1000);
   };

   const payment = async () => {
      const phone = await checkPhone(user.id);
      const { id, first_name } = user;
      if(phone?.status) {
         await createPayment(id, first_name, tariff, way, price);
         return tg.close();
      }
      tg.requestContact(async status => {
         if(!status) return setOpen(true);
         await createPayment(id, first_name, tariff, way, price);
         return tg.close();
      });
   }

   return (
      <>
         <Preloader isLoading={isLoading}/>
         {isVisible && <>
         <Header/>
         <Box color='#fff'>
            <Container maxWidth='sm'>
               <FormControl fullWidth>
                  <TextField
                     focused
                     multiline
                     label='Вибраний тариф'
                     variant='standard'
                     margin='dense'
                     value={tariff}
                     InputProps={{ readOnly: true, sx: styles.input }}
                  />
                  <TextField
                     focused
                     label='Сума до оплати'
                     variant='standard'
                     margin='dense'
                     value={`${price}$`}
                     InputProps={{ readOnly: true, sx: styles.input }}
                  />
               </FormControl>
               <FormControl 
                  fullWidth 
                  focused
                  variant='standard'  
                  sx={styles.paymentWay}   
               >
                  <InputLabel>Спосіб оплати</InputLabel>
                  <Select
                     value={way}
                     onChange={changePaymentWay}
                     inputProps={{ sx: styles.input }}
                     MenuProps={{
                        PaperProps: { sx: styles.select }
                     }}
                  >
                     <MenuItem value='crypto'>USDT (TRC20)</MenuItem>
                     <MenuItem value='bank'>Переказ на карту</MenuItem>
                  </Select>
               </FormControl>
               {way === 'crypto' ? 
                  <Typography variant='body2' mb='5px'>
                     Для здійснення оплати переведіть вказану суму за реквізитами нижче.
                  </Typography> 
                  :
                  <Typography variant='body2' mb='5px'>
                     Для здійснення оплати натисніть кнопку <i>«Підтвердити оплату»</i>, після цього з вами зв'яжеться адміністратором, який надасть реквізити для оплати.
                  </Typography>
               }
               {way === 'crypto' && <Box 
                  display='flex' 
                  alignItems='center'
                  flexDirection='column'
               >
                  <Box
                     component='img'
                     src={wallet}
                     width='80%'
                     alt='wallet'
                     onLoad={handleImageLoad}
                  />
                  <TextField
                     fullWidth
                     focused
                     multiline
                     variant='standard'
                     margin='dense'
                     value='TBLv4DEFdVGg747Vyu6EdCcwREts22GUtj'
                     InputProps={{ 
                        readOnly: true, 
                        sx: styles.input, 
                        inputProps: {
                           style: { textAlign: 'center' }
                        }
                     }}
                  />
               </Box>}
               {way === 'crypto' ?
                  <Typography variant='body2' mt='15px'>
                     <b>Зверніть увагу!</b> Відправте суму, яка вказана вище. У цю суму комісії не входять, вони стягуються окремо блокчейном. Якщо оплата пройшла успішно і з вашого рахунку списались кошти, обов'язково натисніть кнопку <i>«Підтвердити оплату»</i>, після цього з вами зв'яжетьсяадміністратор для підтвердження.
                  </Typography>
                  : 
                  <Typography variant='body2'>
                     <b>Зверніть увагу!</b> Відправляйте суму, яка вказана вище. У цю суму комісії не входять, вони стягуються окремо банком. Якщо оплата пройшла успішно і з вашого рахунку списались кошти, надішліть адміністратору квитанцію для підтвердження.
                  </Typography>
               }
               <Box display='flex' justifyContent='center' mt='15px'>
                  <Button
                     variant='contained'
                     size='large'
                     sx={styles.paymentBtn}
                     onClick={payment}
                  >
                     Підтвердити оплату
                  </Button>
               </Box>
            </Container>
            <Snackbar open={open} autoHideDuration={5000} onClose={closeAlert}>
               <Alert 
                  severity='info' 
                  variant='filled' 
                  sx={styles.alert}
                  onClose={closeAlert}
               >
                  Поділіться номером телефону, щоб ми могли зв'язатись з вами у разі потреби.
               </Alert>
            </Snackbar>
         </Box>
         <Footer/>
         </>}
      </>
   );
};

export default Payment;