
const lista = []
const AgregarNumeros = (event) =>{
    event.preventDefault()
let entrada = document.getElementById ("entrada") 
lista.push(entrada.valueAsNumber)  
entrada.value= ""
mostrarlista()
}
const mostrarlista = () => {
let salida = document.getElementById("salida")
let suma = 0
lista.map((Numeros) => {
 suma += Numeros
})
let promedio = suma / lista.length
let mayor = Math.max(...lista)
let menor = Math.min(...lista)
salida.innerHTML = `
<tr>
<th>promedio</th>
<th>${promedio}</th>
</tr>
<tr>
<th>mayor</th>
<th>${mayor}</th>
</tr>
<tr>
<th>menor</th>
<th>${menor}</th>
</tr>
<tr>
<th>suma</th>
<th>${suma}</th>
</tr>
`
}