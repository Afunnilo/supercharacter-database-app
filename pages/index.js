import Head from 'next/head';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

export default function Home() {
  return(
    <>
    <Head>
      <title>Superhero Database |  Home</title>
      <meta name='keywords' content='superhero' />
    </Head>
    <div className="container">
      <Navbar />
      <Search />
    </div>
    </>
  )
}