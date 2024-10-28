// gps.js

// Demande la localisation à l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.querySelector("#map").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  // Affiche la position sur une carte Google Maps
  function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
    document.querySelector("#map").innerHTML = `<img src='${img_url}'>`;
  }
  
  // Gère les erreurs de géolocalisation
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        document.querySelector("#map").innerHTML = "L'utilisateur a refusé la demande de géolocalisation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.querySelector("#map").innerHTML = "Les informations de localisation ne sont pas disponibles.";
        break;
      case error.TIMEOUT:
        document.querySelector("#map").innerHTML = "La demande de localisation a expiré.";
        break;
      case error.UNKNOWN_ERROR:
        document.querySelector("#map").innerHTML = "Une erreur inconnue est survenue.";
        break;
    }
  }
  