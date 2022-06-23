import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper';

import 'swiper/css';

import 'swiper/css/free-mode';

import 'swiper/css/thumbs';

import {
  SectionHome,
  WrapperPopular,
  ContentLeft,
  ContentRight,
} from '../../../styles/stylesHome';
import RedesSociales from './RedesSociales';

export function Portada({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <SectionHome>
      <Swiper
        spaceBetween={20}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, FreeMode, Thumbs]}
      >
        {data.map((elem, i) => (
          <SwiperSlide key={elem._id}>
            <WrapperPopular>
              <ContentLeft>
                <h1>{elem.titulo}</h1>
                <p>{elem.descripcion}</p>
                <Link href={`/${elem.url}`}>
                  <a>Comprar Ahora!!</a>
                </Link>
              </ContentLeft>
              <ContentRight>
                <div className="wrapper_img">
                  <Image
                    src={elem.img.formats.small.url}
                    width={elem.img.formats.small.width}
                    height={elem.img.formats.small.height}
                    alt={elem.img.formats.small.name}
                  />
                </div>
                <div className="wrapper_border"></div>
                <div className="wrapper_counter">
                  <h3>{i + 1}</h3>
                </div>
              </ContentRight>
            </WrapperPopular>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={1}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {data.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div className="wrapper_img">
              <Image
                src={elem.img.formats.small.url}
                width={elem.img.formats.small.width}
                height={elem.img.formats.small.height}
                alt={elem.img.formats.small.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <RedesSociales />
    </SectionHome>
  );
}
