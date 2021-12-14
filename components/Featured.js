export const getStaticProps = async () => {   //runs at build time as the app is built and components rendered. doesnt run in the browser, only at build time.
  const res = await fetch('https://superheroapi.com/api.php/801968633946256/search/batman');
  const data = await res.json();
  return{
      props:{ echo : data }
    
  }

}


function Featured() {
    
    return(
      
        <div className='featured'>
        <h1>Featured</h1>
        
        <div className="card">
          <div>
            <img src="" alt="" />
          </div>
          <div className="card-details">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    )
}

export default Featured;