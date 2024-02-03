document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    const contactList = document.getElementById('contactList');
    const contactDetails = document.getElementById('contactDetails');
    const favList = document.getElementById('favList');
    const todoItems = document.getElementById('todoItems');
    const backToContactosBtns = document.querySelectorAll('#backToContactosBtn');

    let todos = []; // Almacenar las tareas
    let favoritos = []; // Almacenar los contactos favoritos

    function showPage(pageToShow) {
        pages.forEach(page => {
            if (page === pageToShow) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });
    }

    function renderTodos() {
        todoItems.innerHTML = ''; // Limpiar la lista antes de renderizar
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${todo.text} - Prioridad: ${todo.priority}</span>
                <button class="editBtn">Editar</button>
                <button class="deleteBtn">Eliminar</button>
            `;
            todoItems.appendChild(li);
        });
    }

    // Agregar nueva tarea
    document.getElementById('todoForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const todoText = document.getElementById('todoText').value;
        const priority = document.getElementById('priority').value;
        todos.push({ text: todoText, priority: priority });
        renderTodos();
        document.getElementById('todoText').value = ''; // Limpiar el campo después de agregar la tarea
    });

    // Editar tarea
    todoItems.addEventListener('click', function (event) {
        if (event.target.classList.contains('editBtn')) {
            const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
            const newText = prompt('Editar tarea:', todos[index].text);
            if (newText !== null) {
                todos[index].text = newText;
                renderTodos();
            }
        }
    });

    // Eliminar tarea
    todoItems.addEventListener('click', function (event) {
        if (event.target.classList.contains('deleteBtn')) {
            const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
            todos.splice(index, 1);
            renderTodos();
        }
    });

    // Mostrar la página de Contactos después del login
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        showPage(document.getElementById('contactosPage'));
    });

    // Agregar nuevo contacto
    document.getElementById('addContactBtn').addEventListener('click', function () {
        showPage(document.getElementById('nuevoContactoPage'));
    });

    // Guardar nuevo contacto
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const nuevoContacto = `${nombre} : ${telefono}`;
        const li = document.createElement('li');
        li.textContent = nuevoContacto;
        contactList.appendChild(li); // Agregar contacto a la lista de contactos
        document.getElementById('nombre').value = ''; // Limpiar el campo nombre
        document.getElementById('telefono').value = ''; // Limpiar el campo teléfono
        showPage(document.getElementById('contactosPage')); // Regresar a la página de contactos
    });

    // Mostrar detalles del contacto
    contactList.addEventListener('click', function (event) {
        if (event.target.classList.contains('detailsBtn')) {
            const contactName = event.target.parentNode.textContent.split(':')[0];
            contactDetails.innerHTML = `<li>${contactName}</li>`; // Mostrar información del contacto
            showPage(document.getElementById('detallesContactoPage'));
        }
    });

    // Agregar contacto a Favoritos
    contactList.addEventListener('click', function (event) {
        if (event.target.classList.contains('favBtn')) {
            const contactName = event.target.parentNode.textContent.split(':')[0];
            if (!favoritos.includes(contactName)) {
                const li = document.createElement('li');
                li.textContent = contactName;
                favList.appendChild(li); // Agregar contacto a la lista de Favoritos
                favoritos.push(contactName); // Agregar contacto a la lista de favoritos
            } else {
                alert('El contacto ya está en la lista de favoritos.');
            }
        }
    });

    // Mostrar página de Favoritos
    document.getElementById('favPageBtn').addEventListener('click', function () {
        showPage(document.getElementById('favoritosPage'));
    });

    // Ir al ToDo List desde la página de Favoritos
    document.getElementById('goToTodoListBtn').addEventListener('click', function () {
        showPage(document.getElementById('todoListPage'));
    });

    // Mostrar página de Perfil del usuario
    document.getElementById('perfilUsuarioBtn').addEventListener('click', function () {
        showPage(document.getElementById('perfilUsuarioPage'));
    });

    // Botones de regresar
    backToContactosBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            showPage(document.getElementById('contactosPage'));
        });
    });
});
