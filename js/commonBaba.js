function getTextElementValueById(elementID) {
    const totalElementForSubTotal = document.getElementById(elementID);
    const currentElementForSubTotalString = totalElementForSubTotal.innerText;
    const currentElementForSubTotalTotal = parseInt(currentElementForSubTotalString);
    return currentElementForSubTotalTotal;
}
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    // tax 

    const texAmountString = (currentSubTotal * 0.1).toFixed(2);
    const texAmount = parseFloat(texAmountString);
    setTextElementValueById('tax-amount', texAmount);

    const totalPrice = texAmount + currentSubTotal;
    setTextElementValueById('final-total', totalPrice);
}