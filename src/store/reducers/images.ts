import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface IImages {
   imagesLoaded: number;
}

const initialState: IImages = {
   imagesLoaded: 0
}

export const images = createSlice({
   name: 'images',
   initialState,
   reducers: {
      setImagesLoaded: (state, action: PayloadAction<number>) => { 
         const index = action.payload;
         return { imagesLoaded: index }
      }
   }
});

export const { actions, reducer } = images;