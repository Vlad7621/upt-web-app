export interface ITariff {
   title: string | string[];
   description: string[];
   price: number;
   type: 'study' | 'community';
}