// Name: Emilina Sanduleac
// Date: 3/8/23
// Description: Tip calculator with percentage and option to split the bill if  needed.

'use strict';

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

let calculateBill = () => {
    let bill = Number(billInput.value);
    let tipPercentage = Number(tipInput.value) / 100;
    let tipAmount = bill * tipPercentage;
    let total = bill + tipAmount;
    let perPersonTotal = total / numberOfPeople;
    perPersonTotalDiv.innerText = `${perPersonTotal.toFixed(2)}`;
};

let increasePeople = () => {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill()
};


let decreasePeople = () => {

    if (numberOfPeople <= 1) {
        return
    }
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()

};