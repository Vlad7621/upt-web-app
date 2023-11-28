import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface IPaynent {
   tariff: string,
   price: number;
}

const initialState: IPaynent = {
   tariff: '',
   price: 0
}

export const payment = createSlice({
   name: 'payment',
   initialState,
   reducers: {
      setPayment: (state, action: PayloadAction<IPaynent>) => { 
         const { tariff, price } = action.payload;
         return {
            tariff,
            price
         }
      },
   }
});

export const { actions, reducer } = payment;