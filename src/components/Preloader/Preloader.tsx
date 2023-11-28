import React from 'react';
import { Modal, Skeleton } from '@mui/material';
import logo from '../../assets/logo.svg';
import styles from './styles';


const Preloader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
   return (
      <Modal 
         open={isLoading}
         disableAutoFocus
         sx={styles.preloader}
         slotProps={{
            backdrop: { sx: styles.background }
         }}
      >
         <Skeleton 
            component='img'
            variant='rectangular'
            width='50vw'
            height='fit-content'
            src={logo}
            alt='logo'
            sx={styles.background}
         />
      </Modal>
   );
};

export default Preloader;