// DATOS DEL MENÚ
const menuItems = [
    { 
        id: 1, 
        name: "Hamburguesa Sencilla", 
        category: "Menu", 
        price: "$100", 
        image: "img/sencilla.jpg",
        description: "Clásica hamburguesa con ingredientes frescos."
    },
    { 
        id: 2, 
        name: "Hamburguesa de Arrachera", 
        category: "Menu", 
        price: "$120", 
        image: "img/Arrachera.jpg",
        description: "Deliciosa hamburguesa con carne de arrachera."
    },
    { 
        id: 3, 
        name: "Hamburguesa Cheese",   
        category: "Menu", 
        price: "$150", 
        image: "img/Queso.jpg",
        description: "Hamburguesa con extra de queso derretido."
    },
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');

    // Limpiar el contenedor
    menuContainer.innerHTML = '';

    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }

    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;

        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Agregar clase active al botón clickeado
            button.classList.add('active');

            // Obtener la categoría del botón
            const category = button.dataset.category;

            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});
