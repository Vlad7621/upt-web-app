import { SxProps } from '@mui/material';
import background from '../../assets/background.png'


const styles: Record<string, SxProps> = {
   tariff: {
      background: `url(${background})`,
      backgroundSize: 'cover'
   },
   tariffBtn: {
      bgcolor: '#d5ad79',
      color: '#845b1c',
      ":hover": {
         bgcolor: '#d5ad79',
         color: '#845b1c'
      }
   }
}

export default styles;