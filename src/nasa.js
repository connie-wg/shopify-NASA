const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "3jJ3EdRXa2uUeFfM2F8V32kp0LTkv4cfmDw0Cour";
const startDate = 'start_date=2021-12-01';

export function fetchData(change) {
    try{
        fetch(baseUrl + apiKey)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log(json.url);
            change(json.url);
        })
    } catch(error) {
        console.log(error);
    }
}

export function fetchAllData(change) {
    try{
        fetch(baseUrl + apiKey + '&' + startDate)
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            change(json);
            /*json.array.forEach(element => {
                change(json[1]);
            });*/
        })
    } catch(error) {
        console.log(error);
    }
}
