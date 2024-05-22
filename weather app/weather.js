const print = console.log;
let cityName = document.querySelector('.search');
const API_KEY ='56a2a1aed6be4512b9d212312242105';
let api1 =
    `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${(cityName.value)}&aqi=no`;

cityName.addEventListener('click',(event)=> {
    print(document.querySelector('.input').value)
    event.preventDefault();
    if (`${cityName.value}`.length !== 0) {
        fetch(api1)
            .then(output => print(output.json()))
            .then(data1 => print(data))
            .catch(error)
        {
            alert("City name is required")
        }
    }

})
// fetch('')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error=>{console.log(error);})
