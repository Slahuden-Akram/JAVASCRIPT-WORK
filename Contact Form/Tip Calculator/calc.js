function billcalculator() {
    var amount = document.getElementById('amount').value;

    var status = document.getElementById('status').value;

    var sharing = document.getElementById('num').value;
    var calc_amount = amount / sharing;

    const spanele = document.createElement('p');
    spanele.textContent = calc_amount;

    document.getElementById('one').appendChild(spanele)

}

function tipcalc() {
    var amount = document.getElementById('amount').value;

    var status = document.getElementById('status').value;

    var sharing = document.getElementById('num').value;
    const spanele2 = document.createElement('p');

    document.getElementById('two').appendChild(spanele2)

    if (status == 'fine') {
        spanele2.textContent = (amount * 5) / 100;
    } else if (status == 'good') {
        spanele2.textContent = (amount * 8) / 100;
    } else if (status == 'excellent') {
        spanele2.textContent = (amount * 10) / 100;
    }
}