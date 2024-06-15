document.addEventListener('DOMContentLoaded', function () {
    
    if (typeof jQuery === 'undefined') {
      throw new Error('JQuery no está cargado. Asegúrate de incluir la biblioteca JQuery.');
    }
  
    // Variable para almacenar los IDs de los Amenities seleccionados
    let selectedAmenities = {};
  
    // Escuchar los cambios en los checkboxes
    $('input[type="checkbox"]').change(function() {
      // Obtener el ID y el nombre del Amenity
      const amenityId = $(this).data('id');
      const amenityName = $(this).data('name');
  
      // Si el checkbox está marcado, añadir el Amenity al diccionario
      if (this.checked) {
        selectedAmenities[amenityId] = amenityName;
      } else {
        // Si el checkbox no está marcado, eliminar el Amenity del diccionario
        delete selectedAmenities[amenityId];
      }
  
      // Actualizar el contenido del h4 dentro del div Amenities
      const amenitiesList = Object.values(selectedAmenities).join(', ');
      $('.amenities h4').text(amenitiesList);
    });
  });