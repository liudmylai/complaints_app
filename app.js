const input = document.querySelector('input');
const result = document.querySelector('#result');
const url = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS&$limit=5';

const generateComplaint = (descriptor, resolution, index) => 
    `<div class="complain">
        <span>${descriptor}</span>
        <button type="button" onclick="toggleDescription('rd${index}')">WHAT DID THE POLICE DO?</button>
        <p id="rd${index}">${resolution}</p>
    </div>`;


// function to show/hide an element by id
const toggleDescription = id => document.getElementById(id).style.display = (document.getElementById(id).style.display === 'block') ? 'none' : 'block';

// display result
const displayResult = arr => result.innerHTML = arr.map((value, index) => generateComplaint(value.descriptor, value.resolution_description, index)).join('');

// send request to server
fetch(url)
    // converts json-response to object
    .then(response => response.json())
    // display result data
    .then(data => displayResult(data))
    // catch and display error
    .catch(error => result.innerHTML = error)
