const carrito = document.querySelector('#carrito');

const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('clcik', eliminarCurso);
    vaciarCarritoBtn.addEventListener('clcik', vaciarCarrito);
}

function agregarCurso(e) {
    e.preventDefault()
    if(e.target.classList.contain('agregar-carrito')){
        const curso = a.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').scr,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
}