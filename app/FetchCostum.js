


 export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2d85418ee2msh3a823ebbc53f85ap189168jsna22ddb9a814f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData =  async (url , options)=>{
    const res = await fetch(url , options)
    const end = await res.json();
    return end ;
}