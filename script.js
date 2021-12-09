let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
function calcular(){
    console.log("Calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qtc = (carnePP(duracao)*adultos) + ((carnePP(duracao)/2)*criancas);
    let qts = (cervejaPP(duracao)*adultos);
    let qtb = (bebidasPP(duracao)*adultos) + ((bebidasPP(duracao)/2)*criancas);
    resultado.innerHTML = `<p>${qtc/1000}kg de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qts/350)} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil( qtb/2)} garrafas de bebida</p>`;
}
function carnePP(duracao){
    let carne = 400;
    if (duracao>=6){
        return 650;
    } else {
        return 400;
    }

}
function cervejaPP(duracao){
    let carne = 400;
    if (duracao>=6){
        return 2000;
    } else {
        return 1200;
    }

}
function bebidasPP(duracao){
    let carne = 400;
    if (duracao>=6){
        return 1500;
    } else {
        return 1000;
    }

}