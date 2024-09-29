document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            displayCSVContent(text);
        };
        reader.readAsText(file);
    } else {
        alert('Por favor, seleccione un archivo CSV.');
    }
});

function displayCSVContent(csvText) {
    const lines = csvText.split('\n');
    let content = '';
    lines.forEach(line => {
        const columns = line.split(',');
        content += columns.join(' ') + ' | ';
    });

    const marqueeInner = document.getElementById('marquee-inner');
    marqueeInner.textContent = content;

    // Calcular la duración de la animación en función de la longitud del texto
    const textLength = content.length;
    const duration = Math.max(30, textLength / 10); // Ajusta este valor según sea necesario
    marqueeInner.style.animationDuration = duration + 's';
}
