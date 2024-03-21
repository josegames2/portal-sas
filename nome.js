var n = prompt('qual e o seu nome (obs: so coloca os dois primeiro nome pfv kkkk)')
var l = document.getElementById('nome-aluno')
var L = document.querySelector('#nome-aluno-info')

l.innerText = n
L.innerText = (`${n}!`)