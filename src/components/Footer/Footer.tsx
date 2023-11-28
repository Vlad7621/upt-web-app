import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import instagram from '../../assets/instagram.svg';
import telegram from '../../assets/telegram.svg';
import youTube from '../../assets/youtube.svg';
import styles from './styles';
import { useTelegram } from '../../hooks/useTelegram';


const links: { icon: string, href: string }[] = [
  { icon: instagram, href: 'https://www.instagram.com/ultraprofittrade/?igshid=YmMyMTA2M2Y%3D' },
  { icon: telegram, href: 'https://t.me/Ultraprofittradepublicmain' },
  { icon: youTube, href: 'https://www.youtube.com/channel/UCV4y7TGXBqvV7NyOBbRTC8A' }
]

const Footer: React.FC = () => {
   const { tg } = useTelegram();

   return (
      <Box
         display='flex'
         alignItems='end'
         justifyContent='center'
         minHeight={`${tg.viewportStableHeight * 0.4}px`}
         sx={styles.footer}
      >
         <Box minWidth='100%'>
            <Typography 
               variant='h6' 
               color='#d5ad79'
               textAlign='center' 
               fontWeight='500' 
            >
               ULTRA PROFIT TRADE
            </Typography>
            <Typography 
               variant='body2' 
               color='#d5ad79'
               textAlign='center' 
               fontWeight='500' 
            >
               COMMUNITY
            </Typography>
            <Divider variant='middle' sx={styles.line}/>
            <Container maxWidth='sm' sx={styles.icons}>
               {links.map(({ icon, href }, i) => 
                  <Box 
                     key={`link-${i}`}
                     component='a' 
                     target='_blank'
                     href={href}
                     sx={styles.link}
                  >
                     <Box
                        component='img'
                        src={icon}
                        alt={`icon-${i}`}
                        width='30px'
                        height='30px'
                     />
                  </Box>
               )}
            </Container>
            <Typography variant='body2' textAlign='center' pb='10px'>
               UPT 2023 © Всі права захищено
            </Typography>
         </Box>
      </Box>
   );
};

export default Footer;