import { InVoice } from './classes/inVoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new InVoice('yoshi', 'work', 2000);
docTwo = new Payment('chanakya', 'website', 1000);

let docs: HasFormatter[] = [];
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

let invoices: InVoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

// console.log(invoices); 
// const form = document.querySelector('form');
// console.log(form);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
// console.log(type.value);

const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// console.log(toFrom);

const details = document.querySelector('#details') as HTMLInputElement;
// console.log(details);

const amount = document.querySelector('#amount') as HTMLInputElement;
// console.log(amount);

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new InVoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
})