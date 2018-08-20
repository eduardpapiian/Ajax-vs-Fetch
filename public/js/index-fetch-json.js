document.querySelector('.fetch-json')
    .addEventListener('click', fetchJson);
    
function fetchJson() {
    fetch('client-data.json')
    .then( response => response.json() )
    .then( clientData => {
        document.querySelector('.client-name').innerText = clientData.name;
        document.querySelector('.accaunt-balance').innerText = clientData.balance;
    })
}