// Model

let name1 = 'Hans';
let name2 = 'Kenneth';
let name3 = 'Frans';

let names = ['Hans', 'Kenneth', 'Frans'];
let names2 = [{name: "Joakim", age:29}, 'Kenneth', 1];
let person = {name: "Joakim", age:29};

let outputController = '';

// View

// updateView()
removeCommasController()
function updateView() {
    let html = /*HTML*/ `
    ${names} 
    ${outputController}
    <button onclick="checkIfNamesContainsFrans()">Sjekk om Frans er i names</button>
    
    `;

    document.getElementById('app').innerHTML = html;
}

// function updateView() {
//     let html = /*HTML*/ `
//     ${name1}
//     ${name2}
//     ${name3}
//     `;

//     document.getElementById('app').innerHTML = html;
// }


// Controller
// removeCommas()
function removeCommas() {
    let output = '';
    for(let i = 0; i < names.length; i++) {
       output += " " + names[i];
    }
    return output;
}

function removeCommasController() {
    
    for(let i = 0; i < names.length; i++) {
        outputController += " " + names[i];
    }
   updateView();
}


function checkIfNamesContainsFrans() {
    
    if(names.includes('Frans')){
        alert('Frans er i names arrayet')
    }
    updateView();
}