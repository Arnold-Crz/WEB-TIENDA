import styled from 'styled-components';
import Image from 'next/image';

function RedesSociales() {
  return (
    <WrapperSocial>
      <a href="#">
        <Image
          src="/icon_sociales/Vector-1.svg"
          width={20}
          height={20}
          alt="iconInstagram"
        />
      </a>
      <a href="#">
        <Image
          src="/icon_sociales/Vector-2.svg"
          width={20}
          height={20}
          alt="iconFacebook"
        />
      </a>
      <a href="#">
        <Image
          src="/icon_sociales/Vector-3.svg"
          width={20}
          height={20}
          alt="iconWhatsapp"
        />
      </a>
    </WrapperSocial>
  );
}

const WrapperSocial = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 0px;
  background-color: var(--azul-color);
  border-top-right-radius: 30px;
  a {
    all: unset;
    :hover {
      cursor: pointer;
    }
  }
`;

export default RedesSociales;
