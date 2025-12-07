import { useLoaderData,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaSadTear } from 'react-icons/fa'
export default function SearchPage () {
     const [isOpen,setIsOpen]=useState(false)
    const m = useLoaderData();
     console.log(m)
     useEffect(() => {
         if(m === 'JSON'){
            setIsOpen(true)
         }else{
            setIsOpen(false)
         }

     },[m])

     if(isOpen){
        return(
            <div className='text-white text-center mt-10 text-lg flex items-center justify-center p-2 m-1'>
                    <FaSadTear className='text-5xl'/>
                    <p className='p-5'>Sorry you made a typo</p>
            </div>
        )
     }
    
    return( 
         <div className="text-white items-center justify-center text-center flex">
        <div className='border rounded p-1'>
            <h1>{m.Title}</h1>
            <img className='' src={m.Poster} sizes='300'/>
            <p>{m.Actors}</p>
            <p>{m.Director}</p>
            <p>{m.Released}</p>
         <div className="mt-5">
           <Link to={`/packages/${m.Title}`} className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-black rounded p-1">View</Link>
        </div>
    </div>
        </div>
    
)}