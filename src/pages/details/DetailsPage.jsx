import { useLoaderData } from 'react-router-dom';

export default function DetailsPage() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex items-start justify-start text-white mt-20 gap-10 px-10">
      <div className="flex flex-col items-center">
        <img src={data.Poster} width="250" alt={data.Title} className="rounded-lg shadow-lg" />
        <button className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition">
          Watch Trailer
        </button>
      </div>
<div className='flex  gap-8'>

      <div className="border border-white rounded-lg p-5 max-w-md ">
        <h1 className="text-3xl font-bold mb-2  text-center">{data.Title}</h1>
        <p><strong className='text-red-600'>Year:</strong> {data.Year}</p>
        <p><strong className='text-red-600'>Rated:</strong> {data.Rated}</p>
        <p><strong className='text-red-600'>Released:</strong> {data.Released}</p>
        <p><strong className='text-red-600'>Runtime:</strong> {data.Runtime}</p>
      </div>
      <div className='border border-white rounded-lg p-5 mx-w-md gap-3'>
        <h1 className='text-3xl font-bold mb-2 text-center text-red-600'>{data.Director}</h1>
        <p><strong className='text-red-600'>Award:</strong>{data.Awards}</p>
        <p><strong className='text-red-600'>BoxOffice:</strong>{data.BoxOffice}</p>
        <p><strong className='text-red-600'>Genre:</strong>{data.Genre}</p>
        <p><strong className='text-red-600'>Title:</strong>{data.Title}</p>
      </div>
      <div className='border border-white rounded-lg p-5 mx-w-md gap-3'>
        <h1 className='text-3xl font-bold mb-2 text-center text-blue-500'>About Movie</h1>
        <p className='text-center'>
          {data.Plot}
            </p>
       
      </div>
</div>

    </div>
  );
}
