export const exerciseOptions = {
    method: 'GET',
    
    headers: {
        'X-RapidAPI-Key': '202dc330dbmsh29ac397a8c9f857p1b1a9fjsn3ff1556d2788',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5378de123emshfd309f03e550cbap1e0cf0jsn77fa30f3cfa9',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };




export const fetchData = async(url,options)=>{
   
    const response = await fetch(url, options);
    const data = await response.json();

    return data; 

}