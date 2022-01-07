// Scroll do Banner

const setaDireita = document.getElementById('setaDireita');
const setaEsquerda = document.getElementById('setaEsquerda');
const sliderBaner = document.querySelector('.slider--banner');
let mover = 0;

setInterval(moverDireira, 5000);

setaDireita.addEventListener('click', moverDireira)

function moverDireira(){
    if(mover == -200){
        mover = 0;
        sliderBaner.style.marginLeft = mover + '%';
    } else {
        mover = mover - 100;
        sliderBaner.style.marginLeft = mover + '%';
    }
};

setaEsquerda.addEventListener('click', () => {
    if(mover == 0){
        mover = 0;
        sliderBaner.style.marginLeft = mover + '%';
    } else {
        mover = mover + 100;
        sliderBaner.style.marginLeft = mover + '%';
    }
});

// Menu para Celular.

const menuCelular = document.querySelector('.menuCelular');

menuCelular.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

// Configureções dos Produtos.

const img = document.querySelectorAll('img');
const nomeTenis = document.querySelectorAll('.nomeTenis');
const precoTenis = document.querySelectorAll('.precoTenis');

for(let i=0;i<=5;i++){
    img[i].setAttribute('src', tenis[i].imgTenis);
    nomeTenis[i].innerText = tenis[i].nome;
    precoTenis[i].innerText = tenis[i].preco;
}