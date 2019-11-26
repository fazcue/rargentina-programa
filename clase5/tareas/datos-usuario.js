const $submitDatos = document.querySelector('#enviar-datos-usuario');

$submitDatos.onclick = function() {
    let resultado = document.querySelector('#resultado');
    let titulo = document.querySelector('h1');

    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;

    //reemplazo titulo con nombre de usuario
    titulo.innerText = 'Bienvenido, ' + nombreUsuario;

    //Muestro la info del usuario en div con id 'resultado'
    resultado.innerHTML = 'Tu nombre: ' + nombreUsuario;
    resultado.innerText += '. Tu apellido: ' + apellidoUsuario;
    resultado.innerText += '. Tu edad: ' +edadUsuario;

    //Evito que se recargue la pagina
    return false;
}