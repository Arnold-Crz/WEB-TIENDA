import { getData } from '../services';
import { Portada } from '../components/ui';
import Layout from '../components/layout/Layout';

function HomePage({ PortaData }) {
  return (
    <Layout title="Inicio">
      <Portada data={PortaData} />
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
