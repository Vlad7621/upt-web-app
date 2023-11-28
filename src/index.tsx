import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import App from './App';
// import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <ThemeProvider theme={theme}>
      <Provider store={store}>
         <BrowserRouter>
            <App/>
         </BrowserRouter>
      </Provider>
   </ThemeProvider>
);