import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import { getData } from '../services';
import Layout from '../components/layout/Layout';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {
  SectionHome,
  WrapperPopular,
  ContentLeft,
  ContentRight,
} from '../styles/stylesHome';

function HomePage({ PortaData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Layout title="Inicio">
      <SectionHome>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {PortaData.map((elem) => (
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
                </ContentRight>
              </WrapperPopular>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionHome>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = await getData();

  return {
    props: {
      PortaData: url,
    },
  };
}

export default HomePage;
