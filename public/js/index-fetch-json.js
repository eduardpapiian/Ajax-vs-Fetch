document.querySelector('.fetch-json')
    .addEventListener('click', fetchJson);
    
function fetchJson() {
    fetch('client-data.json')
    .then( response => response.json() )
    .then( clientData => {
        document.querySelector('.client-name-fetch').innerText = clientData.name;
        document.querySelector('.accaunt-balance-fetch').innerText = clientData.balance;
    })
}