import axios from 'axios';


interface ICheckPhone {
   status: boolean;
}

interface ICreatePayment {
   id: number;
   firstName: string;
   tariff: string;
   way: string;
   price: string;
}

export const checkPhone = async (id: number) => {
   try {
      const { data } = await axios.get<ICheckPhone>('https://2wtdfk5n-5000.euw.devtunnels.ms/bot/check-phone', {
         params: { id }
      });
      return data;
   } catch(err) {
      console.log(err);
   }
}

export const createPayment = async (id: number, firstName: string, tariff: string, way: string, price: number) => {
   const paymentWay = way === 'crypto' ? 'USDT (TRC20)' : 'Переказ на карту';
   try {
      await axios.post<ICreatePayment>('https://2wtdfk5n-5000.euw.devtunnels.ms/bot/create-payment', {
         id, 
         firstName, 
         tariff, 
         way: paymentWay, 
         price
      });
   } catch(err) {
      console.log(err);
   }
}