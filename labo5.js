const token = 'TOKENXD'; 

console.log("Reproduciendo lista de reproducción");

fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "context_uri": "spotify:playlist:YOUR_PLAYLIST_ID"
    })
}).then(response => {
    console.log("Saltando a la siguiente canción");
    return fetch('https://api.spotify.com/v1/me/player/next', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });
}).then(response => {
    setTimeout(function timeout() {
        console.log("Reproduciendo canción favorita");
    }, 5000);
}).catch(error => {
    console.error('Error al interactuar con la API de Spotify:', error);
});

console.log("Pausando reproducción");
fetch('https://api.spotify.com/v1/me/player/pause', {
    method: 'PUT',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
}).catch(error => {
    console.error('Error al pausar la reproducción:', error);
});


//SINCRONICO
function reproducirMusica() {
    console.log("Reproduciendo lista de reproducción");
    console.log("Saltando a la siguiente canción");
    console.log("Reproduciendo canción favorita");
    console.log("Pausando reproducción");
}

reproducirMusica();

//ASINCRONICO
function reproducirMusica() {
    console.log("Reproduciendo lista de reproducción");
    
    setTimeout(() => {
        console.log("Saltando a la siguiente canción");
        
        setTimeout(() => {
            console.log("Reproduciendo canción favorita");
            
            setTimeout(() => {
                console.log("Pausando reproducción");
            }, 2000); // Pausa después de 2 segundos

        }, 3000); // Reproduce canción favorita después de 3 segundos

    }, 1000); // Salta canción después de 1 segundo
}

reproducirMusica();