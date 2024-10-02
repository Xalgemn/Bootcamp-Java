// Obtener el elemento de relleno de la barra
const progressBarFill = document.getElementById('progress-fill') as HTMLDivElement | null;

// Función para actualizar la barra de progreso
function updateProgressBar(percentage: number) {
    if (progressBarFill) {
        // Asegurarse de que el porcentaje esté entre 0 y 100
        const clampedPercentage = Math.max(0, Math.min(percentage, 100));
        
        // Actualizar el ancho del relleno de la barra basado en el porcentaje
        progressBarFill.style.width = `${clampedPercentage}%`;
    }
}

// Ejemplo: Actualizar la barra al 50%
updateProgressBar(50);