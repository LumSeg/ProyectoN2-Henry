import axios from 'axios';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('movieForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const form = document.getElementById('movieForm');

        const formData = {
            title: document.getElementById('title').value,
            year: document.getElementById('year').value,
            director: document.getElementById('director').value,
            duration: document.getElementById('duration').value,
            genre: Array.from(document.getElementById('genre').selectedOptions).map(option => option.value),
            rate: document.getElementById('rate').value,
            poster: document.getElementById('poster').value,
        };

        axios.post('http://localhost:3000/movies', formData)
            .then(response => {
                console.log('Película creada:', response.data);
                alert('Película creada exitosamente');
                form.reset(); // Limpiar el formulario después de enviar los datos
            })
            .catch(error => {
                console.error('Error al crear la película:', error);
                alert('Error al crear la película');
            });
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        document.getElementById('movieForm').reset();
    });
});



