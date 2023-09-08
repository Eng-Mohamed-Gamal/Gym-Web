


export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '590b2655c6mshe2ca84ff4297057p1f4084jsne2b087af8e86',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData =  async (url , options)=>{
    const res = await fetch(url , options)
    const end = await res.json();
    return end ;
}