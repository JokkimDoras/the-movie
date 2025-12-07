import Header from '../component/Header';
import { Outlet } from 'react-router-dom';

export default function Root () {
    return <div className='min-h-screen min-w-screen  container mx-auto px-20 bg-black'>
    <Header/>
    <Outlet/>
  </div>
}