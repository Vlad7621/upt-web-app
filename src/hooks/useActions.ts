import { useMemo } from 'react';
import { AppDispatch } from '../store/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions as paymentActions } from '../store/reducers/payment';
import { actions as imagesActions } from '../store/reducers/images';
import { useDispatch } from 'react-redux';


const rootActions = {
    ...paymentActions,
    ...imagesActions
}

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}