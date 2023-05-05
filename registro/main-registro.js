
var Clientes='';

const obtenerClientes = () => {

    fetch('http://localhost:8888/clientes', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json", //MIME Type
      }
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaClientes) => {
     console.log(respuestaClientes);
    Clientes=(respuestaClientes);

 
    }); 
  }

  obtenerClientes();

  

const guardar = async () => {

  let nomb       =document.getElementById('nombre').value;
  let apell     =document.getElementById('apellido').value;
  let email        =document.getElementById('email').value;
  let contraseña   =document.getElementById('contraseña').value;

    const respuesta = await fetch(
        `http://localhost:8888/clientes`,
        {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nomb,
                apellido: apell,
                correo: email,
                password:contraseña
            }),
        }
    );

    const resJSON = await respuesta.json();

   alert('Usuario agregado');
   window.location.href = "http://127.0.0.1:5500/menu/index.html";
};

