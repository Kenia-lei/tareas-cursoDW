function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

function limpiarContenido() {
    const contenido = document.getElementById('contenido');
    contenido.innerHTML = "";
}

function mostrarInicio() {
    limpiarContenido();
    const contenido = document.getElementById('contenido');
    const botonSaludar = document.createElement('button');
    botonSaludar.textContent = 'Saludar';
    botonSaludar.className = 'saludar';
    botonSaludar.onclick = mostrarSaludo;
    contenido.appendChild(botonSaludar);
}

function mostrarSaludo () {
    limpiarContenido();
    const contenido = document.getElementById('contenido');

    const saludo = document.createElement('div');
    saludo.className = 'saludo';
    saludo.textContent = "Bienvenido al mundo web";

    const btnCerrar = document.createElement('button');
    btnCerrar.className = 'cerrar';
    btnCerrar.textContent = 'x';
    btnCerrar.onclick = mostrarInicio;

    saludo.appendChild(btnCerrar);
    contenido.appendChild(saludo);
}

function mostrarFormulario() {
    limpiarContenido();
    const contenido = document.getElementById('contenido');

    const formulario = document.createElement('div');
    formulario.className = 'formulario';

    const inputNombre = document.createElement('input');
    inputNombre.placeholder = 'Nombre';

    const inputApellido = document.createElement('input');
    inputApellido.placeholder = 'Apellido';

    const inputCorreo = document.createElement('input');
    inputCorreo.type = 'email';
    inputCorreo.placeholder = 'Correo';

    const btnGuardar = document.createElement('button');
    btnGuardar.className = 'guardar';
    btnGuardar.textContent = 'Guardar';

    formulario.appendChild(inputNombre);
    formulario.appendChild(inputApellido);
    formulario.appendChild(inputCorreo);
    formulario.appendChild(btnGuardar);

    contenido.appendChild(formulario);

}