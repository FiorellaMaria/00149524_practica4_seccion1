function obtenerActividadPorDia(dia) {
    const actividades = {
        lunes: "Atender a un cliente específico.",
        martes: "Visitar una agencia fuera de la ciudad.",
        miércoles: "Llevar a mi hija al ballet.",
        miercoles: "Llevar a mi hija al ballet.", // por si no ponen tilde
        jueves: "Priorizar entregas de desarrollo.",
        viernes: "Atender problemas de manera remota.",
        sábado: "Hacer lo que mi esposa quiera.",
        sabado: "Hacer lo que mi esposa quiera." // por si no ponen tilde
    };
    return actividades[dia.toLowerCase()] || null;
}

document.getElementById('recordatorioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const dia = document.getElementById('dia').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const actividad = obtenerActividadPorDia(dia);

    const resultadoDiv = document.getElementById('resultado');
    if (actividad) {
        resultadoDiv.textContent = `Hoy es ${dia}. ${actividad} ${mensaje}`;
    } else {
        resultadoDiv.textContent = `No hay actividades registradas para "${dia}". ${mensaje}`;
    }
});