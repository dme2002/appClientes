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


  function mostrarCarrito() {

    document.getElementById('seccion-carrito').style.display="block";
    document.getElementById('seccionProductos').style.display="none";
    document.getElementById('seccionEmpresas').style.display="none";
    document.getElementById('seccionMenu').style.display="none";
    

    var modalNuevaCategoria = document.getElementById('staticBackdrop');
    var verNuvaCategoia = bootstrap.Modal.getOrCreateInstance(modalNuevaCategoria)
    verNuvaCategoia.hide();
  }


  function mostrarPaginaUbicacion() {

    document.getElementById('seccion-ubicacion').style.display="block";
    document.getElementById('seccion-carrito').style.display="none";
    
    
  }

  function mostrarUbicacionActual() {
    /** @type {HTMLElement}*/
    var posElt;
    /** @type {HTMLElement} */
    var posLinkElt;

 let mapaImagen=document.getElementById('mapa');
 let contenidoMapa=document.getElementById('contenido-mapa');
 let botonMostrar=document.getElementById('boton-confirmar');
 let botonPagar=document.getElementById('boton-pagar');
 let contenedorLink=document.getElementById('contenedor-link');



 if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
     var link = document.getElementById("myLink");
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     console.log("Latitud: " + latitude + ", Longitud: " + longitude);

     document.getElementById('Pos').innerHTML=`${latitude}, ${longitude}`;
     document.getElementById('PosLink').innerHTML='Mostrar tu posición en un mapa';
    
     

     link.setAttribute("href", `https://maps.google.com/?q=${latitude},${longitude}`);
     link.setAttribute("target", "_blank");


     });
 } else {
     console.log("La localización no es soportada por este navegador.");
 }


 mapaImagen.setAttribute("style", "display:none;");
 contenidoMapa.setAttribute("style", "display:none;");
 botonMostrar.setAttribute("style", "display:none;");
 botonPagar.setAttribute("style", "display:block;");
 contenedorLink.setAttribute("style", "display:block;");
 
 


}



function mostrarPaginaTarjeta() {
  window.location.href = "http://127.0.0.1:5500/tarjeta/index.html";
  
}