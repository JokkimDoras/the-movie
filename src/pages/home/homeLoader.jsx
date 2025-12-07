export default async function homeLoader () {
    const LIKE_SUGGESTION = [
        'Coolie',
        "Jailer",
        "Enthiran",
        "Sivaji",
        "Petta",
        "Kabali",
        "Kaala",
        "Annaatthe",
        "Darbar",
        "Baba",
        "Padaiyappa",
        "Arunachalam",
        "Muthu",
        "Baasha",
        "Thalapathi",
        
        "Annamalai",
        "Lingaa",
        "Kochadaiiyaan",
        
        "Chandramukhi"
      ];
      
const renderedMovie = await Promise.all(
 LIKE_SUGGESTION.map(async(m) => {
    const fetchData = await fetch(`http://www.omdbapi.com/?t=${m}&apikey=daac4829`)
    const res = await fetchData.json()
    return res;
})
);

     return renderedMovie;
}