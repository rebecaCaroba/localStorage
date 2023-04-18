let addBtn = document.querySelector('#add');
let clearBtn = document.querySelector('#clear');
let form = document.querySelector('#form-name');
let res = document.querySelector('#res');
let texts = [];

addBtn.addEventListener('click', () => {
    let newText = document.querySelector('#text').value;
    texts.push(newText);

    localStorage.setItem('artexts', JSON.stringify(texts));
    let getTexts = localStorage.getItem('artexts');
    console.log(getTexts);
    document.querySelector('#text').value = ' ';
    document.querySelector('#text').focus();

});

clearBtn.addEventListener('click', () => {
    texts = [];
    localStorage.artexts = JSON.stringify(texts);
    if (res.length != ' ') {
        res.innerHTML = 'Texto limpado..'
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    res.innerHTML = '';

    if (localStorage.getItem('artexts') !== null && JSON.parse(localStorage.getItem('artexts')).length === 0) {

        res.innerText = 'Não exite valores adicionados..'
    } else {
        texts = JSON.parse(localStorage.getItem('artexts'));
    }



    for (let i in texts) {
        let p = document.createElement('p');
        p.innerText += `${texts[i]}`
        res.append(p)
    }
});