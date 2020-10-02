const button = document.querySelector('button');


const buttonClickHandler = event => {

    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('This was clicked!');
};



const boundFn = buttonClickHandler.bind(this);


const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', event => {
    console.log('CLICKED DIV');
    console.log(event);
});

button.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
    console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');


list.addEventListener('click', function(event) {

    event.target.closest('li').classList.toggle('highlight');

    button.click();
    console.log(this);
});