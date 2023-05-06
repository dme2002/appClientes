var Categorias='';
var cat;

const obtenerCategorias = () => {

    fetch('http://localhost:8888/categorias', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json", //MIME Type
      }
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaCategorias) => {
     console.log(respuestaCategorias);
    Categorias=(respuestaCategorias);

  renderizarCategorias();


    }); 
  }

obtenerCategorias();


const renderizarCategorias = () => {
  Categorias.forEach((categoria, index) => {
    document.getElementById('contenedor-categorias').innerHTML +=
      `
      <div class="categoria-${index+1}" onclick="renderizarEmpresas(${index}, this)">
      <img class="sombra" src="${categoria.imagen}" alt="">
      <h6>${categoria.nombreCategoria}</h6>
      </div> 
      `;
  });
  
}




function renderizarEmpresas(idCategoria) {
  
  cat=idCategoria;
  console.log('categorias: ',idCategoria);


  Categorias[idCategoria].empresas.forEach((empresa, idP) => {
    document.getElementById('zona-empresas').innerHTML +=
      `
      <div class="contenido-empresas" onclick="renderizarProductos(${idP})">
    
      <div class="img-empresa" style="width: 60%;">

          <img src="${empresa.imagen}" alt="" style="width: 70%;">

      </div>
      <div class="descripción-empresa">


          <h6 style="font-style: normal; font-weight: 700;font-size: 20px;line-height: 100%;">${empresa.nombreEmpresa}</h6>
          <p style="font-style: normal;font-weight: 300;font-size: 14px;line-height: 130%;color: #9E9E9E;">${empresa.descripcion}</p>
          <p style="font-style: normal;font-weight: 400;font-size: 14px;line-height: 100%;">${empresa.calificacion}</p>

      </div>

  </div>
      `;
  });


mostrarEmpresas();
};




function renderizarProductos(idProducto) {

console.log('empresa :', idProducto);
console.log(Categorias[cat].empresas[idProducto].productos);

document.getElementById('titulo-empresa').innerHTML =` <h2>${Categorias[cat].empresas[idProducto].nombreEmpresa}</h2>`;


Categorias[cat].empresas[idProducto].productos.forEach(producto => {
  document.getElementById('zona-productos').innerHTML +=
    `
    <div class="contenido-comidas">
    <div class="subContenido-comidas">
        <div class="img-empresa">

            <img src="${producto.imagen}" alt="">

        </div>
        <div class="descripción-comidas">


            <h6 style="font-style: normal; font-weight: 700;font-size: 20px;line-height: 100%;">${producto.nombreProducto}</h6>
            <p style="font-style: normal;font-weight: 300;font-size: 14px;line-height: 130%;color: #9E9E9E;">${producto.descripcion}</p>
            <p style="font-style: normal;font-weight: 400;font-size: 14px;line-height: 100%;">${producto.precio}</p>

        </div>

    </div>
        <div style="display: flex; align-items: end;">
        <button type="button" id="boton-continuar" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar</button>
        </div>
    </div>
  
    `;
});




mostrarProductos();
  
}




function mostrarEmpresas() {
  
document.getElementById('seccionEmpresas').style.display="block";
document.getElementById('seccionMenu').style.display="none";

}


function mostrarProductos() {

  document.getElementById('seccionProductos').style.display="block";
  document.getElementById('seccionEmpresas').style.display="none";
  document.getElementById('seccionMenu').style.display="none";
  
  }