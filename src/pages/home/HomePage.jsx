import { useLoaderData, Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

export default function HomePage() {
  const movies = useLoaderData();

  const renderedList = movies.map((m, i) => (
    <div
      key={i}
      className="bg-gray-900 text-white rounded-lg p-4 w-[250px] flex flex-col items-center"
    >
      <h3 className="font-bold text-lg mb-3 text-center">{m.Title}</h3>
      <img
        src={m.Poster}
        alt={m.Title}
        className="w-full h-[350px] object-cover rounded"
      />
      <p className="mt-2 text-sm">{m.Actors}</p>
      <p className="text-sm">{m.Director}</p>
      <p className="text-sm mb-3">{m.Released}</p>
      <Link
        to={`/packages/${m.Title}`}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-1 mt-auto"
      >
        View
      </Link>
    </div>
  ));

  return (
    <div className="min-h-screen bg-black text-white px-10 py-5">
      
      <div className="flex items-center gap-2 mb-6">
        <p className="text-blue-500 text-lg">Here the Top Recommendations</p>
        <CiHeart color="pink" />
      </div>

   
      <div className="flex flex-wrap gap-6 justify-center">
        {renderedList}
      </div>
    </div>
  );
}
