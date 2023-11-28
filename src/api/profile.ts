import axios from 'axios';
import { IPayment } from '../models/IPayment';


interface IPayments {
   [key: string]: IPayment;
}

export const getPayments = async (id: number) => {
   try {
      const { data } = await axios.get<IPayments>('https://2wtdfk5n-5000.euw.devtunnels.ms/bot/get-payments', {
         params: { id }
      });
      return data;
   } catch(err) {
      console.log(err);
   }
}