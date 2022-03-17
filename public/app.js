import { InVoice } from './classes/inVoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new InVoice('yoshi', 'work', 2000);
docTwo = new Payment('chanakya', 'website', 1000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const inOne = new InVoice("mario", "work", 3000);
const inTwo = new InVoice("yoshi", "club", 3000);
const inThree = new InVoice("james", "driver", 3000);
// console.log(inOne.format());
// console.log(inOne);
// console.log(inTwo);
// console.log(inThree);
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// console.log(invoices); 
// const form = document.querySelector('form');
// console.log(form);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
// console.log(type.value);
const toFrom = document.querySelector('#tofrom');
// console.log(toFrom);
const details = document.querySelector('#details');
// console.log(details);
const amount = document.querySelector('#amount');
// console.log(amount);
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new InVoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
