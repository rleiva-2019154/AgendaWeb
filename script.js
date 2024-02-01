document.addEventListener('DOMContentLoaded', function () {
    // Elementos del DOM
    const loginForm = document.getElementById('loginForm');
    const contactosPage = document.getElementById('contactos');
    const addContactBtn = document.getElementById('addContactBtn');
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');
    const detallesContactoPage = document.getElementById('detallesContacto');
    const favPage = document.getElementById('favoritos');
    const todoListPage = document.getElementById('todoList');
    const todoForm = document.getElementById('todoForm');
    const todoItems = document.getElementById('todoItems');

    // Mostrar página de contactos después del login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById('login').classList.add('hidden');
        contactosPage.classList.remove('hidden');
    });

    // Agregar nuevo contacto
    addContactBtn.addEventListener('click', function () {
        contactosPage.classList.add('hidden');
        document.getElementById('nuevoContacto').classList.remove('hidden');
    });

    // Guardar nuevo contacto
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        // Crear nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = `${nombre}: ${telefono}`;
        // Agregar contacto a la lista
        contactList.appendChild(li);
        // Mostrar página de contactos
        document.getElementById('nuevoContacto').classList.add('hidden');
        contactosPage.classList.remove('hidden');
    });

    // Mostrar detalles del contacto al hacer clic en él
    contactList.addEventListener('click', function (event) {
        const contactName = event.target.textContent.split(':')[0];
        document.getElementById('detallesContacto').classList.remove('hidden');
        // Simplemente mostrar el nombre del contacto como ejemplo
        document.getElementById('contactDetails').innerHTML = `<li>${contactName}</li>`;
    });

    // Mostrar página de ToDo list
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const todoText = document.getElementById('todoText').value;
        const priority = document.getElementById('priority').value;
        // Crear nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = `${todoText} - Prioridad: ${priority}`;
        // Agregar tarea a la lista
        todoItems.appendChild(li);
        // Limpiar campo de texto
        document.getElementById('todoText').value = '';
    });
});
