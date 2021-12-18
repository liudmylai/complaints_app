const borough = ['BROOKLYN', 'MANHATTAN', 'QUEENS', 'BRONX', 'STATEN ISLAND'];
const input = document.querySelector('input');
const result = document.getElementById('result');
const divBtn = document.getElementById('input-group');
const occurrence = document.getElementById('occurrence');

// create fragment of the result
const generateComplaint = (descriptor, resolution, index) =>
    `<div id="complaint${index}" class="complaint">
        <span><i class="icon fas fa-history"></i> ${descriptor}</span>
        <button type="button" onclick="toggleDescription('complaint${index}')">WHAT DID THE POLICE DO?</button>
        <p>${resolution}</p>
    </div>`;

// create fragment of occurrence
const generateOccurrence = (arr) => `<span>${arr[0]} was complained about ${arr[1]} times</span>`;

// create url using unique borough name and send a request to the server
const sendRequest = (name) => {
    // set limit according to the number user's input
    // if the user doesn't input correct number, make the default be 10
    let limit = (Number(input.value) > 0) ? input.value : 10;

    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${name}&$limit=${limit}`;
    // send request to server
    fetch(url)
        // converts json-response to array of objects
        .then(response => response.json())
        // display result data
        .then(data => {
            displayResult(data);
            displayOccurrence(data);
        })
        // catch and display error
        .catch(error => result.innerHTML = error);
}

// function to show/hide an element by id
const toggleDescription = id => document.getElementById(id).className = (document.getElementById(id).className === 'complaint') ? 'complaint-active' : 'complaint';

// display result
const displayResult = arr => 
    result.innerHTML = arr
        // sort an array by descriptor for ascending
        .sort((a, b) => a.descriptor > b.descriptor ? 1 : -1)
        // transform the array of objects to array of HTML-fragments 
        .map((value, index) => generateComplaint(value.descriptor, value.resolution_description, index))
        // join HTML-fragments into single string
        .join('');

// display occurrence block
const displayOccurrence = arr =>
    occurrence.innerHTML = Array.from(arr
        // transform array of objects to array descriptor-strings
        .map((element) => element.descriptor)
        // calculate how much time  each descriptor occurs and put the result into Map()
        .reduce((obj,key) => obj.set(key, obj.get(key) + 1 || 1), new Map()))
        // converts Map into array and transform it to array of HTML-fragments
        .map((subArr) => generateOccurrence(subArr))
        // join HTML-fragments into single string
        .join('');

// create buttons for borough
const createBtn = (arr) => {
    for (let name of arr) {
        let btn = document.createElement('button');
        btn.innerHTML = name;
        btn.addEventListener('click', () => sendRequest(name));
        divBtn.appendChild(btn);
    }
}

createBtn(borough);
