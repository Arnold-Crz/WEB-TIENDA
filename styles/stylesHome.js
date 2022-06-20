import styled from 'styled-components';

const SectionHome = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--primer-color);
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

const WrapperPopular = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
`;

const ContentLeft = styled.div`
  h1 {
    font-size: 2.5rem;
    color: var(--quinto-color);
  }
  p {
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 200;
    color: var(--quinto-color);
  }

  a {
    margin-top: 30px;
    margin-left: 30px;
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
    border: solid 2px var(--segundo-color);

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
`;

export { SectionHome, ContentLeft, ContentRight, WrapperPopular };
