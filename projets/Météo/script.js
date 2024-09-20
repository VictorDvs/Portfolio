// Par default afficher la température de la ville de l'utilisateur en utilisant l'PAi d'openweather https://api.openweathermap.org/data/2.5/weather et en utilisant la géolocalisation de l'utilisateur.
// Clé API OpenWeatherMap 
const apiKey = 'b95b256a998707bec94f0ff0b7a7e9ab';

// Fonction pour obtenir la géolocalisation de l'utilisateur
function getWeather() {
    // Vérifie si la géolocalisation est supportée par le navigateur
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
        
    } else {
        alert("La géolocalisation n'est pas supportée par ce navigateur.");
    }
}


// Fonction appelée en cas de succès
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // URL de l'API avec les coordonnées géographiques
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=fr&appid=${apiKey}&units=metric`;

    // Effectuer la requête fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Manipuler les données de la météo ici
            console.log(data);

            // Exemple d'affichage des informations principales
            const city = data.name;
            const country = data.sys.country;
            const temp = data.main.temp;
            const weather = data.weather[0].description;

            document.getElementById('weather').innerHTML = `Ville: ${city} <br><br> Pays: ${country} <br><br> Température: ${temp}°C <br><br> Météo: ${weather}`;
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données météo :", error);
        });
}

// Fonction appelée en cas d'erreur de géolocalisation
function error() {
    alert("Impossible d'obtenir votre position.");
}

 // Fonction pour obtenir la météo via le nom de la ville
 function getWeatherByCity() {
    const city = document.getElementById('cityInput').value;

    if (city) {
        // URL API pour la ville
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) { // ===  Si la ville est trouvée (code 200)
                    console.log(data);
                    
                    const cityName = data.name;
                    const country = data.sys.country;
                    const temp = data.main.temp;
                    const weather = data.weather[0].description;
                    const icon = data.weather[0].icon;
                    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                    document.querySelector('#img').src = iconUrl;


                    document.getElementById('cityWeather').innerHTML = `Ville: ${cityName} <br><br> Pays : ${country} <br><br> Température: ${temp}°C <br><br> Météo: ${weather}`;
                } else {
                    document.getElementById('cityWeather').innerHTML = `Ville non trouvée.`;
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données météo :", error);
            });
    } else {
        alert("Veuillez entrer le nom d'une ville.");
    }
}

// Puis ajouter un champ de recherche pour que l'utilisateur puisse rentrer le nom d'une ville et afficher la température de cette ville.