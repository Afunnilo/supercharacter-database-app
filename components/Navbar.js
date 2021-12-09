import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
               <img src="https://i.pinimg.com/originals/9f/09/30/9f0930509466149e260874b1af0d109b.png" alt="" />
            </div>
            <h1 className='nav-title'>Superhero Database</h1>     
            <div className='links'>
            <Link href='/'><a>Home</a></Link> 
            <Link href='/about'><a>About</a></Link>  
            </div>
            
           
                 
        </nav>
    )
}

export default Navbar
