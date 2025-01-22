const valueInput = document.getElementById('value');
const nameInput = document.getElementById('name');
const tableOutput = document.getElementById('transaction-list');

let counter = JSON.parse(localStorage.getItem('counter')) || 0;
let transactionList = [];

if (transactionList.length > 0) {
    transactionList.forEach(transaction => {
        TableRowCreator({id: (transaction.id), name: (transaction.name), value: (transaction.value)});  
    });
}

function TableRowCreator() {
    const newRow = document.createElement('tr');
    newRow.id = transaction.id;
    newRow.innerHTML = `
    <td>${transaction.id + 1}</td>
    <td>${transaction.value}</td>
    <td>${transaction.value}</td>
    <td>
        <button onclick="DeleteFunction(id)">x</button>
    </td>
    `

tableOutput.appendChild(newRow);

}

function AddTransaction() {
    
    TableRowCreator({
        id: counter,
        name: nameInput.value,
        value: valueInput.value
    });
    
    localStorage.setItem('transactionList', JSON.stringify(transactionList));
    localStorage.setItem('counter', counter);

    counter++;
}

function DeleteFunction(id) {
    transactionList = transactionList.filter(transaction => transaction.id !== id); 
    localStorage.setItem('transactionList', JSON.stringify(transactionList));

}