window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip () {
    let amount = document.querySelector('#amount').value;
    /* let persons = document.querySelector('#persons').value; */
    let service = document.querySelector('#services').value;

console.log(service);
if (amount === '' && service === 'Select') {
    alert("enter valid number and select a service");
    return ;
}

let tipAmount = (amount * service);
let totalBill = parseFloat(tipAmount) + parseFloat(amount);
document.querySelector('.tip').style.display = 'block';
document.querySelector('#total').innerHTML = tipAmount.toFixed(2);
document.querySelector('#totalBill').innerHTML = totalBill.toFixed(2);
document.querySelector('#each').style.display = 'none';

}

/* if (persons === '1')
    document.querySelector('#each').style.display = 'none';
else
    document.querySelector('#each').style.display = 'block';
let total = (amount * service) / persons;
let total = (amount * service);
total = total.toFixed(2);
document.querySelector('.tip').style.display = 'block';
document.querySelector('#total').innerHTML = total;
} */