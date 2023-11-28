import axios from 'axios';


interface ICheckDiscord {
   status: boolean;
}

export const checkDiscord = async (id: number) => {
   try {
      const { data } = await axios.get<ICheckDiscord>('https://2wtdfk5n-5000.euw.devtunnels.ms/bot/check-discord', {
         params: { id }
      });
      return data;
   } catch(err) {
      console.log(err);
   }
}