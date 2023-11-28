export interface IPayment {
   tariff: string;
   way: string; 
   price: number;
   user: number;
   timestamp: number;
   status?: 'Підтверджено' | 'Відхилено';
}
