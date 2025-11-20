console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherInfo = document.querySelector('#weather-info');
const errorMessage = document.querySelector('#error-message');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    const location = search.value;

    weatherInfo.textContent = 'Loading...';
    errorMessage.textContent = '';

    fetch("/weather?address="+location).then(response => {
        response.json().then(data => {
            if (data.error) {
                errorMessage.textContent = data.error;
                weatherInfo.textContent = '';
            } else {
                weatherInfo.textContent = data.forecast;
                errorMessage.textContent = '';
            }
        })
    })
})