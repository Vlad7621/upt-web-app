import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/router';


const AppRouter: React.FC = () => {
   return (
      true ? 
      <Routes>
         {privateRoutes.map(route => 
            <Route 
               path={route.path} 
               element={<route.element/>}
               key={route.path}
            />
         )}
      </Routes>
      :
      <Routes>
         {publicRoutes.map(route => 
            <Route 
               path={route.path} 
               element={<route.element/>}
               key={route.path}
            />
         )}
         <Route 
            path='*' 
            element={<Navigate to='/' replace/>} 
         /> 
      </Routes>
   );
};

export default AppRouter;