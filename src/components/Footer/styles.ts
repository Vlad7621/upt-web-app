import { SxProps } from '@mui/material';
import background from '../../assets/background-footer.jpg';


const styles: Record<string, SxProps> = {
   footer: {
      color: '#fff',
      background: `url(${background})`,
      backgroundSize: 'cover'
   },
   line: {
      background: '#575757', 
      mt: '10px' 
   },
   icons: {
      display:'flex',
      justifyContent: 'center',
      gap: '20px',
      pt: '15px', 
      pb: '30px' 
   },
   link: {
      color:'#fff',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': { 
         transform: 'scale(1.4)' 
      }
   }
}

export default styles;