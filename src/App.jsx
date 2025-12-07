import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import HomePage from './pages/home/HomePage';
import DetailsPage from './pages/details/DetailsPage';
import SearchPage from './pages/search/SearchPage';
import homeLoader from './pages/home/homeLoader';
import { searchLoader } from './pages/search/searchLoader';
import { detailsLoader } from './pages/details/detailsLoader';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        index:true,
        element:<HomePage/>,
        loader:homeLoader,
      },
      {
        path:'/search',
        element:<SearchPage/>,
        loader:searchLoader,
      },
      {
        path:'/packages/:name',
        element:<DetailsPage/>,
        loader:detailsLoader
      }

    ]
  }
])
export default function App () {
  return (
    <RouterProvider router={router}/>
  )
}

// function App () {

// const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=daac4829'
// const fetchData = async(e) => {
//   try{
//     const response = await fetch(url);
//     const data = await response.json();
//     const { Title ,Year ,Rated } = data
//     console.log(Title,Year,Rated)
//     return data
//   }
//   catch(err) {
//      console.log('error:',err)
//   }
// //  const response = await fetch(url);
// //  const data = await response.json()
//   //  console.log( data)
//   //  console.log(e)
// }

//   return <div className=''>
//     <div className="flex">
//       <h1>The movie</h1>
//       <button onClick={fetchData} className="border "> Click</button>

//     </div>
//     <div className=""></div>
//     <div>
//       result
//     </div>
//   </div>
// }

// export default App;