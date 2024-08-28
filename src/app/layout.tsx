import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href={'/favicon.ico'} type="image/x-icon" />
        <title>Geothermine</title>
        <meta
          name="description"
          content="Geothermine is pioneering a sustainable future by merging geothermal energy with cutting-edge crypto mining technology."
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
