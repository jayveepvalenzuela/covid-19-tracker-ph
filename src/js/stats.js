const lastUpdate = document.querySelector('.last-update');
const confirmed = document.querySelector('.confirmed');
const active = document.querySelector('.active');
const deaths = document.querySelector('.deaths');
const deathsToday = document.querySelector('.deaths-today');
const recovered = document.querySelector('.recovered');
const recoveredToday = document.querySelector('.recovered-today');

fetch('https://coronavirus-ph-api.herokuapp.com/total', {
    method: 'GET',
    redirect: 'follow'
}).then(function(response) {
    response.json().then(function(obj) {
        lastUpdate.innerText = new Date(obj.data.last_update).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        confirmed.innerText = obj.data.cases.toLocaleString();
        active.innerText = obj.data.admitted.toLocaleString();
        deaths.innerText = obj.data.deaths.toLocaleString();
        deathsToday.innerText = obj.data.deaths_today.toLocaleString();
        recovered.innerText = obj.data.recoveries.toLocaleString();
        recoveredToday.innerText = obj.data.recoveries_today.toLocaleString();
    });
}).catch(error => console.log('error', error));
