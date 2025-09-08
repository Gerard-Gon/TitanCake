// Productos disponibles
const productos = {
  berlin: {
    id: '1',
    nombre: 'Berlin',
    precio: 1500
  },

  merengue: {
    id: '2',
    nombre: 'Merengue',
    precio: 1200
  },

  empolvado: {
    id: '3',
    nombre: 'Empolvado',
    precio: 1000
  },

  chilenito: {
    id: '4',
    nombre: 'Chilenito',
    precio: 800
  },
};

let carrito = [];
let total = 0;

// Agrega producto al carrito usando su clave (''berlin'', ''merengue'', etc) que estan en la card de cada producto
function agregarProducto(clave) {
  const producto = productos[clave];
  if (producto) {
    carrito.push(producto);
    total += producto.precio;
    actualizarResumen();
  }
}

// Quitamos el producto por indice de la lista carrito
function quitarProducto(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarResumen();
}

// Actualiza la tabla y el total mostrada en la card del resumen del producto

function actualizarResumen() {
  const tabla = document.getElementById('tabla-productos');
  const totalSpan = document.getElementById('total-compra');
  tabla.innerHTML = '';

  carrito.forEach((producto, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>
        <a href="#!" onclick="quitarProducto(${index})">
          <i class="material-icons red-text">remove_circle</i>
        </a>
      </td>
    `;
    tabla.appendChild(fila);
  });

  totalSpan.textContent = total;
}

// función para finalizar la compra y accionada en el boton finalizar compra

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }else{

  alert('Gracias por tu compra');
  carrito = [];
  total = 0;
  actualizarResumen();

  }
}