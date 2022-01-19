const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "3jJ3EdRXa2uUeFfM2F8V32kp0LTkv4cfmDw0Cour";
const startDate = 'start_date=2021-12-01';
const endDate = 'end_date=2022-01-14';



async function fetchAllData(change,imgUrl) {
    try{
        const response = await fetch(baseUrl + apiKey + '&' + startDate + '&' + endDate);
        const final = await response.json();
        change(final);
        console.log(final);
    } catch(error) {
        console.log(error);
    }
}

