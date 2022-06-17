import styled from 'styled-components';
import Layout from '../components/layout/Layout';

function HomePage() {
  return (
    <Layout title="Inicio">
      <div>
        <H1>DevCruz</H1>
      </div>
    </Layout>
  );
}

const H1 = styled.h1`
  color: red;
  font-size: 3rem;
`;

export default HomePage;
