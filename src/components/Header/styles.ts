import { SxProps } from '@mui/material';
import background from '../../assets/background-header.jpg';


const styles: Record<string, SxProps> = {
   header: {
      boxShadow: 'none',
      bgcolor: '#181818',
      background: `url(${background})`,
      backgroundSize: 'cover'
   },
   joinBtn: {
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