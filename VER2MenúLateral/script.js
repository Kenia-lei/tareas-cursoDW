let registros = [];

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

    btnGuardar.onclick = function() {
        const nombre = inputNombre.value.trim();
        const apellido = inputApellido.value.trim();
        const correo = inputCorreo.value.trim();

        if (nombre && apellido && correo) {
            registros.push({nombre, apellido, correo});
            mostrarFormulario();
        } else {
            alert("Por favor completa los campos restantes.");
        }
    };

    formulario.appendChild(inputNombre);
    formulario.appendChild(inputApellido);
    formulario.appendChild(inputCorreo);
    formulario.appendChild(btnGuardar);

    contenido.appendChild(formulario);

    const tabla = document.createElement('table');
    tabla.style.marginTop = '20px';
    tabla.style.borderCollapse = 'collapse';

    const encabezado = document.createElement('tr');
    ['Nombre', 'Apellido', 'Correo', 'Opciones'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        th.style.border = '1px solid black';
        th.style.padding = '5px';
        encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);

    registros.forEach((reg, index)=>{
        const fila = document.createElement('tr');

        Object.values(reg).forEach(valor =>{
            const td = document.createElement('td');
            td.textContent = valor;
            td.style.border = '1px solid black';
            td.style.padding = '5px';
            fila.appendChild(td);
        });

        const tdOpciones = document.createElement('td');
        tdOpciones.style.border = '1px solid black';
        tdOpciones.style.padding = '5px';

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'X';
        btnEliminar.className = 'eliminar';

        btnEliminar.onclick = () => {
            registros.splice(index, 1);
            mostrarFormulario();
        };

        tdOpciones.appendChild(btnEliminar);
        fila.appendChild(tdOpciones);
        tabla.appendChild(fila);
    });

    contenido.appendChild(tabla);

}
