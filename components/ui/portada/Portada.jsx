import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import {
  SectionHome,
  WrapperPopular,
  ContentLeft,
  ContentRight,
  WrapperSocial,
} from '../../../styles/stylesHome';

export function Portada({ data }) {
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
        modules={[Autoplay, Pagination]}
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
      <WrapperSocial>
        <a href="#">
          <Image
            src="/icon_sociales/Vector-1.svg"
            width={30}
            height={30}
            alt="iconInstagram"
          />
        </a>
        <a href="#">
          <Image
            src="/icon_sociales/Vector-2.svg"
            width={30}
            height={30}
            alt="iconFacebook"
          />
        </a>
        <a href="#">
          <Image
            src="/icon_sociales/Vector-3.svg"
            width={30}
            height={30}
            alt="iconWhatsapp"
          />
        </a>
      </WrapperSocial>
    </SectionHome>
  );
}
