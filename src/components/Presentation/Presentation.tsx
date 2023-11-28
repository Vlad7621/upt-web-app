import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { settings } from '../../utils/slider';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { Box } from '@mui/material';
import { useActions } from '../../hooks/useActions';
import styles from './styles';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useAppSelector } from '../../hooks/useAppSelector';


interface IPresentation {
   images: string[];
   blockRef?: React.RefObject<HTMLUListElement>;
}

const Presentation: React.FC<IPresentation> = ({ images, blockRef }) => {
   const { imagesLoaded } = useAppSelector(state => state.imagesReducer);
   const { setImagesLoaded } = useActions();
   const [autoPlay, setAutoPlay] = useState<boolean>(false);
   const [scale, setScale] = useState<number>(1);

   const handleImageLoad = (index: number) => setImagesLoaded(index);

   const stopAutoPlay = () => setAutoPlay(false);

   const appendDots = (dots: React.ReactNode) => {
      return (
         <ul ref={blockRef} onClick={stopAutoPlay}>
            {dots}
         </ul>
      );
   }

   const changeScale = ({ state }: ReactZoomPanPinchRef) => {
      setAutoPlay(false);
      setScale(state.scale);
   }

   useEffect(() => {
      if(imagesLoaded === images.length - 2) setAutoPlay(true);
   }, [imagesLoaded, images.length]);

   return (
      <Box sx={scale !== 1 ? styles.slider : undefined}>
         <Slider 
            {...settings} 
            swipe={scale === 1}
            autoplay={autoPlay}
            onSwipe={stopAutoPlay}
            appendDots={appendDots}
         >
            {images.map((image, i) => 
               <Box key={i}>
                  <TransformWrapper 
                     doubleClick={{ disabled: true }}
                     alignmentAnimation={{ 
                        animationTime: scale === 1 ? 0 : 500,
                     }}
                     zoomAnimation={{ disabled: true }}
                     panning={{ disabled: scale === 1 }}
                     onTransformed={changeScale}
                  >
                     <TransformComponent
                        wrapperStyle={{
                           height: scale === 1 ? 'fit-content' : '100vh'
                        }}
                     >
                        <Box
                           component='img'
                           src={image} 
                           alt={`slide-${i}`} 
                           width='100%'
                           onLoad={handleImageLoad.bind(null, i)}
                        />
                     </TransformComponent>
                  </TransformWrapper>
               </Box>
            )}
         </Slider>
      </Box>
   );
};

export default Presentation;