function mostrarReceta(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('visible'), 10);
    }
}

function cerrarReceta(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('visible');
        setTimeout(() => (modal.style.display = 'none'), 300);
    }
}

// Permite cerrar al hacer clic fuera del contenido
document.addEventListener('click', e => {
    if (e.target.classList.contains('info-receta')) {
        cerrarReceta(e.target.id);
    }
});

// Permite cerrar con la tecla "Esc"
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const modales = document.querySelectorAll('.info-receta.visible');
        modales.forEach(m => cerrarReceta(m.id));
    }
});
