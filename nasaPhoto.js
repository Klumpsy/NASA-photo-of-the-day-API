//Get info from NASA astroids     
getRoverPhotos();

//Async funtion to get photos from NASA API; 
async function getRoverPhotos() { 
    let apiKey = 'msfrj6nDdLKBZmY1jKWsbpYvdctuhCj3GMmQZxvI'; 
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    let data = await response.json(); 
    console.log(data); 
    useApiData(data); 
}   

function useApiData(data) { 
    document.querySelector(".title").innerHTML = data.title; 
    document.querySelector(".photo").innerHTML = `<img src="${data.url}">`; 
    document.querySelector(".description").innerHTML = data.explanation; 
    document.querySelector(".date").innerHTML = data.date;
}


