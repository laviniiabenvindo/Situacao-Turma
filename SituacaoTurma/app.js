const inMedia = document.getElementById('inMedia');
const inTurma = document.getElementById('inTurma');
const nome = document.getElementById('inName');
const outMedia = document.getElementById('outMedia');
const outName = document.getElementById('outName');
const outTurma = document.getElementById('outTurma');

inMedia.addEventListener('click', () =>{
    let nota1 = +document.getElementById('inNota1').value;
    let nota2 = +document.getElementById('inNota2').value;
    let result = ((nota1 + nota2)/2)
    outMedia.textContent = `Sua média é ${result}`
    if(result >= 7){
        outName.textContent = `Parabéns ${nome.value}! Você foi aprovado(a)!`
    }else if(result < 7 & result >= 3){
        outName.textContent = `Atenção ${nome.value}, você está em recuperação`
    }else if(result < 3){
        outName.textContent = `Ops ${nome.value}, você foi reprovado`
    }
});
inTurma.addEventListener('click', ()=>{
    let nota1 = +document.getElementById('inNota1').value;
    let nota2 = +document.getElementById('inNota2').value;
    let result = ((nota1 + nota2)/2)
    let mediaTurma = [1,2,3,4,5,6,7,8,9];
    mediaTurma.push(result)
    console.log(mediaTurma)
    let soma = 0;
    for(var i = 0; i < mediaTurma.length; i++) {
        soma += mediaTurma[i];
    }
    outTurma.textContent = `A média da turma${soma/10}`;
});
