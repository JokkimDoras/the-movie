export async function searchLoader({ request }) {
   const { searchParams } = new URL(request.url)
   const userSearch = searchParams.get('term')
   if(!userSearch){
    throw new Error ('Search Term must be Provide')
   }
   try{
    const response = await fetch(`http://www.omdbapi.com/?t=${userSearch}&apikey=daac4829`)
        const data = await response.json()
        if(data.Response === 'False'){
            return 'JSON'
        }
     return data;
    }catch(err) {
        throw new Error ('wrong')
       
    }

  
   }
   
  
  