import img_1 from '../assets/private-channel (1).jpg';
import img_2 from '../assets/private-channel (2).jpg';
import img_3 from '../assets/private-channel (3).jpg';
import img_4 from '../assets/private-channel (4).jpg';
import img_5 from '../assets/private-channel (5).jpg';
import img_6 from '../assets/private-channel (6).jpg';
import img_7 from '../assets/private-channel (7).jpg';
import img_8 from '../assets/private-channel (8).jpg';
import img_9 from '../assets/private-channel (9).jpg';
import img_10 from '../assets/private-channel (10).jpg';
import { ITariff } from '../models/ITariff';


export const images: string[] = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10];

export const tariffs: ITariff[] = [
   {
      title: '1 місяць', 
      description: ['Доступ в ком’юніті з професійною', 'аналітикою та корисною інформацією', 'на 1 місяць'],
      price: 50,
      type: 'community'
   },
   {
      title: '3 місяці', 
      description: ['Доступ в ком’юніті з професійною', 'аналітикою та корисною інформацією', 'на 1 місяць'],
      price: 125,
      type: 'community'
   },
   {
      title: '6 місяців', 
      description: ['Доступ в ком’юніті з професійною', 'аналітикою та корисною інформацією', 'на 1 місяць'],
      price: 250,
      type: 'community'
   },
   {
      title: 'Безстрокова', 
      description: ['Доступ в ком’юніті з професійною', 'аналітикою та корисною інформацією', 'на весь час'],
      price: 400,
      type: 'community'
   }
]