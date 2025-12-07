import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

export default function Header () {
    return <div className='flex items-center justify-between px-4 h-15'>
        <div className='flex items-center space-x-2 bg-black rounded '>
            <Link to={'/'} className='flex'>
            <h1 className='text-red-700 font-bold text-4xl'>MOVIE</h1>
            <p className='pt-6 ml-2 text-blue-700 font-bold'> hub</p>
            </Link>
        </div>
        <div>
            <SearchInput/>
        </div>
    </div>
}