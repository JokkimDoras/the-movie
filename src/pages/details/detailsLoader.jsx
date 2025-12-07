export async function detailsLoader ({ params }) {
   const { name } = params;
//    console.log(name)
const fetchData = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=daac4829`)
const data = await fetchData.json()
   return data
}