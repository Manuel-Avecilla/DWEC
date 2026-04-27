// 1. seleccion de elementos

//Elementos y colecciones
//------------------------------------------------------------
// <h1 id="title">Titulo Inicial</h1>
const titulo = document.getElementById("title")
alert(titulo.textContent)
//------------------------------------------------------------
/*
<p class="parrafo"> hola 123 </p>
<p class="parrafo"> adios 123 </p>
*/
const parrafos = document.getElementsByClassName("parrafo")
// [ p_1, p_2 ]

for (let i = 0; i < parrafos.length; i++) {
    const p = parrafos[i];
    alert(p.textContent)
}
//------------------------------------------------------------
/*
<ul class="lista_principal">
    <li>prueba 1</li>
    <li>prueba 2</li>
</ul>
<ul>
    <li>prueba 3</li>
</ul>
*/
const li = document.getElementsByTagName("li")
// [ li_1, li_2, li_3 ]

for (let i = 0; i < li.length; i++) {
    alert(li[i].textContent)
}
//------------------------------------------------------------
/*
<ul class="lista_principal">
    <li>prueba 1</li>
    <li>prueba 2</li>
</ul>
<ul>
    li>prueba 3</li>
</ul>
*/
const primer_li = document.querySelector(".lista_principal li")
// li --> <li>prueba 1</li>

alert(primer_li.textContent)

const lista_li = document.querySelectorAll(".lista_principal li")
// [ li_1, li_2 ]

for (let i = 0; i < lista_li.length; i++) {
    alert(lista_li[i].textContent)
}

//------------------------------------------------------------
