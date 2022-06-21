import styled from 'styled-components';

const SectionHome = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--primer-color);

  ::before {
    content: '';
    position: absolute;
    top: 60px;
    left: 150px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    filter: blur(100px);
    background-color: var(--cuarto-color);
  }

  .swiper-pagination {
    position: initial;
    margin-top: 2rem;
  }

  .swiper-pagination-bullet {
    background-color: var(--segundo-color);
  }
  .swiper-pagination-bullet-active {
    background-color: var(--quinto-color);
    width: 1.5rem;
    border-radius: 5px;
  }
`;

const WrapperPopular = styled.div`
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;
`;

const ContentLeft = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-left: 30px;
    color: var(--quinto-color);
  }
  p {
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 200;
    margin-left: 30px;
    color: var(--quinto-color);
  }

  a {
    margin-top: 30px;
    margin-left: 50px;
    width: 180px;
    padding: 10px 0;
    display: flex;

    justify-content: center;
    color: var(--quinto-color);
    border-radius: 10px;
    border: #f49600 solid 5px;
    border-image-outset: linear-gradient(92deg, #0072f5, #de2ff7);
    animation: neon 10s infinite linear;
    @keyframes neon {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }
`;

const ContentRight = styled.div`
  display: grid;
  justify-self: center;
  place-items: center;
  position: relative;
  width: 450px;
  height: 450px;
  .wrapper_img {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: var(--septimo-color);
  }
  .wrapper_border {
    width: 400px;
    height: 400px;
    position: absolute;
    border-radius: 50%;
    border: solid 2px rgba(0, 114, 245, 0.5);

    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--segundo-color);
    }

    ::before {
      top: 0;
      left: 107px;
    }

    ::after {
      bottom: 0;
      right: 107px;
    }
  }

  .wrapper_counter {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    background-color: var(--segundo-color);

    ::before {
      z-index: -1;
      content: '';
      position: absolute;
      width: 80px;
      height: 30px;
      border-radius: 15px;
      background-color: var(--segundo-color);
      filter: blur(5px);
    }
    h3 {
      font-size: 1rem;
      color: var(--quinto-color);
    }
  }
`;

const WrapperSocial = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px 0px;
  background-color: var(--segundo-color);
  border-top-right-radius: 50px;
  a {
    all: unset;
    :hover {
      cursor: pointer;
    }
  }
`;

export {
  SectionHome,
  ContentLeft,
  ContentRight,
  WrapperPopular,
  WrapperSocial,
};
