const valueInput = document.getElementById('value');
const nameInput = document.getElementById('name');
const tableOutput = document.getElementById('transaction-list');

let counter = 0;
let transactionList = [];

function AddTransaction() {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${counter + 1}</td>
        <td>${nameInput.value}</td>
        <td>${valueInput.value}</td>
        <td>
            <button>x</button>
        </td>
    `

    tableOutput.appendChild(newRow);

    transactionList.push({
        id: counter,
        name: nameInput.value,
        value: valueInput.value
    });
    
    localStorage.setItem('transactionList', JSON.stringify(transactionList));
    localStorage.setItem('counter', JSON.stringify(counter));

    counter++;
}