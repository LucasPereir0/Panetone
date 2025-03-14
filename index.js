import Panetone from './model/Panetone.js'
import Ingredientes from './model/Ingredientes.js'

const butao = document.getElementById('calcular')

butao.addEventListener('click', () => {
    let Raio = Number(document.getElementById('Raio').value)
    let altura = Number(document.getElementById('Grande').value)
    let massa = Number(document.getElementById('medio').value)
    let quantidade = Number(document.getElementById('Pequeno').value)

    const ingredientes = new Ingredientes(quantidade, massa)
    const resIngredientes = ingredientes.calcularIngrediente()

    const panetone = new Panetone(Raio,altura,massa)
    const res = panetone.calcularVolume()

    const total = resIngredientes.calcularPrecoTotal()

    const id_preco = document.getElementById('preco')
    id_preco.innerHTML = total.toFixed(2)

    const id_ingredientes = document.getElementById('quantidadeIgredientes')
    id_ingredientes.innerHTML = ""

    const id_res = document.getElementById('volumePanetone')
    id_preco.innerHTML = total.toFixed(2)
    
    id_res.innerHTML = res.toFixed(2)

    Object.entries(resIngredientes).forEach(([nome, preco]) => {
        const p = document.createElement('p')
        console.log(nome, preco)

        p.innerHTML = `${nome}: ${Number(preco).toFixed(2)}`        
        id_ingredientes.appendChild(p)
    })


})
