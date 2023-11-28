import { SxProps } from '@mui/material';
import background from '../../assets/background.png';


const styles: Record<string, SxProps> = {
   title: {
      mb: '10px' 
   },
   auth: {
      background: `url(${background})`,
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
   },
   discordBtn: {
      width: '70%',
      borderColor: '#d5ad79',
      color: '#d5ad79',
      ":hover": {
         bgcolor: '#d5ad79',
         color: '#845b1c',
         borderColor: '#d5ad79'
      }
   }
}

export default styles;