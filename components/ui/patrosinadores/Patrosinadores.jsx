import styled from 'styled-components';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import marcaUno from '../../../public/img_marcas/marcas-1.png';
import marcaDos from '../../../public/img_marcas/marcas-2.png';
import marcaTres from '../../../public/img_marcas/marcas-3.png';
import marcaCuatro from '../../../public/img_marcas/marcas-4.png';
import marcaCinco from '../../../public/img_marcas/marcas-5.png';
import marcaSeis from '../../../public/img_marcas/marcas-6.png';

const DATA_IMG = [
  marcaUno,
  marcaDos,
  marcaCinco,
  marcaTres,
  marcaCuatro,
  marcaSeis,
];

export function Patrosinadores() {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        className="wrapper_patrosinadores"
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {DATA_IMG.map((item, i) => {
          return (
            <SwiperSlide key={i + 1}>
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.src}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;

  .wrapper_patrosinadores > div {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
