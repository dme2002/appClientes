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
    Clientes=respuestaClientes;




    }); 
  }

obtenerClientes();


function validadLogin() {

 //console.log(Clientes);
  let email =document.getElementById('email').value;
  let contraseña   =document.getElementById('contraseña').value;
  let expPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
  let expemail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let acceso=false;


  for (let i = 0; i < Clientes.length; i++) {
    // console.log(Clientes[i].nombre);

    if (Clientes[i].correo==email && Clientes[i].password==contraseña) {

      console.log('Usuario existente');
      acceso=true;
     // break;  
    } 
    
  }

  
  if (email==null || email.length==0 || expemail.test(email.value)) {
    //  alert('email invalido');
    document.getElementById('email').style.boxShadow='0 0 5px red';
        console.log('error');
         // acceso= false;

    } else if (contraseña==null  || contraseña.length<8|| expPassword.test(contraseña.value)) {
        //  alert('Contraseña invalida');
        document.getElementById('contraseña').style.boxShadow='0 0 5px red';
            console.log('error');
             // acceso= false;
          
  
    } else if(acceso==true){
        alert('Usuario Correcto');
          //console.log('Usuario Correcto');
      window.location.href = "http://127.0.0.1:5500/menu/index.html";
      
  
  
    } else{
  
            console.log('Usuario o contraseña incorrecto');
          
        }


  
}

function mostrarPaginaRegistro() {

window.location.href = "http://127.0.0.1:5500/registro/registro.html";
}


function mostrarPaginaBienvenida() {

window.location.href = "http://127.0.0.1:5500/Bienvenida/index.html";
}

function mostrarPaginaInicioSesion() {
  
  window.location.href = "http://127.0.0.1:5500/iniciar%20Seccion/inicio-sesion.html";
}

