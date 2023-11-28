import { createTheme } from '@mui/material';


const theme = createTheme({
   components: {
      MuiTypography: {
         defaultProps: {
            fontFamily: 'Montserrat, sans-serif'
         }
      },
      MuiCheckbox: {
         styleOverrides: {
            root: {
               color: '#fff'
            }
         }
      }
   },
   palette: {    
      primary: {
         main: '#d5ad79'
      },
      info: {
         main: '#fff'
      }
      // secondary: {
      //    main: '#d5ad79'
      // }
   }
});
 
export default theme;