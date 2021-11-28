function updateProductNumber(inputId, isAdd, totalId, price) {
    const productInput = document.getElementById(inputId);
    let numberOfPorduct = productInput.value;
    if (isAdd == true) {
        numberOfPorduct = parseFloat(numberOfPorduct) + 1;
    }
    else if (numberOfPorduct > 0) {
        numberOfPorduct = parseFloat(numberOfPorduct) - 1;
    }
    productInput.value = numberOfPorduct;

    const productTotal = document.getElementById(totalId);
    productTotal.innerText = numberOfPorduct * price;

    calculate();
};

function getInputValue (quantityId) {
    const quantittext = document.getElementById(quantityId).value;
    const quantityNumber = parseFloat(quantittext);
    return quantityNumber;
}

function calculate () {
    const phoneTotalPrice = getInputValue('phone-number') * 1219;
    const caseTotalPrice = getInputValue('case-number') * 59;
    const subTotal = phoneTotalPrice + caseTotalPrice;
    const taxParsentage = 10;
    const tax = Math.round(subTotal * (taxParsentage / 100));
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// phone buttons eventLIstener
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone-number', true, 'phone-total', 1219);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone-number', false, 'phone-total', 1219);
});

// case buttons eventLIstener
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case-number', true, 'case-total', 59);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case-number', false, 'case-total', 59);
});