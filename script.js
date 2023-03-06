const addBtn = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const form = document.querySelector('#form-name');
const texts = [] 

addBtn.addEventListener('click', () => {
    const text = document.querySelector('#text').value;
    texts.push(text);
    
    localStorage.setItem('texts', JSON.stringify(texts));
    const getTexts = localStorage.getItem('texts');
    console.log(getTexts);
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
});