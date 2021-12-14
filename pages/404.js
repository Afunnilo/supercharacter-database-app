import Link from 'next/link';
import { useEffect } from 'react';
import {useRouter} from 'next/router'
const NotFound = () => {
    const router = useRouter(); // router.go, router.push
   /* useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])*/
   return ( 
        <div className="not-found">
            <h1> Ooops...</h1>
            <img className='image' src="https://c.tenor.com/0dUwC5nmPxEAAAAC/batman-tears.gif" alt="batman crying gif" />
            <h2>That page can not be found</h2>
            
            <p>Go back to the <Link href='/'> 
                 <a>Homepage  <img className='notfoundimg' src="https://cdn11.bigcommerce.com/s-fg272t4iw0/images/stencil/1280x1280/products/773/1026/C-10780__58899.1557813563.jpg?c=2" alt="" /> </a>
                 </Link>
                
                 </p>
        </div>
     );
}
 
export default NotFound;