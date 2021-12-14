import Head from 'next/head';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Featured from '../components/Featured'

export const getStaticProps = async () => {   //runs at build time as the app is built and components rendered. doesnt run in the browser, only at build time.
  const res = await fetch('https://superheroapi.com/api.php/801968633946256/568');
  const data = await res.json();
  return{
      props:{ ronin : data }
    
  }

}
export default function Home({ronin}) {
  return(
    <>
    <Head>
      <title>Superhero Database |  Home</title>
      <meta name='keywords' content='superhero' />
    </Head>
    <div className="container">
      <Navbar />
      <Search />
      <div>
      <div className='featured'>
        <h1>Featured</h1>
        
        <div className="card">
          <div>
            <img className="card-image"src={ronin.image.url} alt="" />
          </div>
          <div className="card-details">
            <p>Name - {ronin.name}</p>
          
            <p></p>
          </div>
        </div>
      </div>
      </div>
      {console.log(ronin)}
      
    </div>
    </>
  )
}