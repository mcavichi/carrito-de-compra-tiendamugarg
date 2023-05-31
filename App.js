import { validarProductoRepetido } from "./src/accionesCarrito.js";
import { obtenerProductos } from "./src/obtenerProductos.js";

const mostrarProductos = async () => {
    const contenedorProductos = document.getElementById("producto-contenedor");

    const productos = await obtenerProductos();

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML += `<div class="card container text-center d-flex flex-column align-self-center mb-3 mt-3 shadow" style="width: 18rem;">
                        <img src="${producto.img}" class="seccion2__card-img-top mt-3" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.material}</p>
                            <p class="card-text">$ ${producto.precio}</p>
                            <a class="btn seccion2__btn-primary" id=boton${producto.id}>Agregar al carrito</a>
                        </div>
                    </div> 
                    `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
        validarProductoRepetido(producto.id);
        Toastify({
            text: 'Producto agregado al carrito!',
            duration: 3000,
            position: 'right',
            gravity: 'top',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast();
        })
    });
};


export { mostrarProductos };