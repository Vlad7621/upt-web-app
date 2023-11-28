import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import AppRouter from './components/AppRouter/AppRouter';
import './App.css';



const App: React.FC = () => {
   const { tg, user } = useTelegram();

   useEffect(() => tg.expand(), [tg]);

   return (
      <>
      {/* {user?.id ? <AppRouter/> : <></>} */}
       <AppRouter/>
      </>
   );
};

export default App;