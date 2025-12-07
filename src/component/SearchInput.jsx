import { useState } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function SearchInput () {
    const[ term,setTerm ] =useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?term=${term}`)
        setTerm('')
          }

    return <form onSubmit={handleSubmit}>
    <div className='relative'>
        <div className='absolute inset-y-0 flex items-center pl-3'>
     <BsFillSearchHeartFill className='text-s'/>
            </div>
         <input
        value={term}
        onChange={e => setTerm(e.target.value)}
        className=' w-full border bg-white pl-10 py-2 shadow-none rounded  '
        placeholder='Search Movie'
        />
        </div>
    
   
</form>
}