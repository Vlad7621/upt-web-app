import { SxProps } from '@mui/material';


const styles: Record<string, SxProps> = {
   input: {
      color: '#fff'
   },
   select: {
      background: '#505050', 
      color: '#fff'
   },
   paymentWay: {
      mt: '8px', 
      mb: '10px'
   },
   wallet: {
      color: '#fff',
      textAlign: 'center'
   },
   paymentBtn: {
      width: '75%',
      bgcolor: '#d5ad79',
      color: '#845b1c',
      ":hover": {
         bgcolor: '#d5ad79',
         color: '#845b1c'
      }
   },
   alert: {
      width: '100%',
      color: '#fff',
      bgcolor: '#2b2b2b'
   }
}

export default styles;