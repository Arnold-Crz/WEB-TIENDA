import Head from 'next/head';
import { Navbar } from '../ui';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{`CodeShop | ${title || 'Inicio'}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Bienbenidos a la tienda se hardware CodeShop"
        />
        <meta name="autor" content="Arnold Cruz" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
