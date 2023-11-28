import img_1 from '../assets/study (1).jpg';
import img_2 from '../assets/study (2).jpg';
import img_3 from '../assets/study (3).jpg';
import img_4 from '../assets/study (4).jpg';
import img_5 from '../assets/study (5).jpg';
import img_6 from '../assets/study (6).jpg';
import img_7 from '../assets/study (7).jpg';
import img_8 from '../assets/study (8).jpg';
import img_9 from '../assets/study (9).jpg';
import img_10 from '../assets/study (10).jpg';
import img_11 from '../assets/study (11).jpg';
import img_12 from '../assets/study (12).jpg';
import img_13 from '../assets/study (13).jpg';
import img_14 from '../assets/study (14).jpg';
import img_15 from '../assets/study (15).jpg';
import { ITariff } from '../models/ITariff';


export const images: string[] = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, img_13, img_14, img_15];

export const tariffs: ITariff[] = [
   {
      title: ['ONLINE', 'Група'], 
      description: ['6 тижнів навчання', 'Безкоштовний доступ до приватного ком’юніті на місяць', 'Лекційні матеріали', 'Доступ до записів', 'Чіткий графік уроків'],
      price: 300,
      type: 'study'
   },
   {
      title: ['ONLINE', 'Індивідуально'], 
      description: ['6 тижнів навчання', 'Безкоштовний доступ до приватного ком’юніті на місяць', 'Лекційні матеріали', 'Доступ до записів', 'Чіткий графік уроків'],
      price: 700,
      type: 'study'
   },
   {
      title: ['OFFLINE', 'Індивідуально'], 
      description: ['6 тижнів навчання', 'Безкоштовний доступ до приватного ком’юніті на місяць', 'Лекційні матеріали', 'Доступ до записів', 'Чіткий графік уроків'],
      price: 800,
      type: 'study'
   }
]