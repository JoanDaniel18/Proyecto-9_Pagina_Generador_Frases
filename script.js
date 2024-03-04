const generateQuote = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randomNum = Math.floor((Math.random() * 15) + 1);
            let randomQuote = data[randomNum];
            
            // Verificar si randomQuote tiene la propiedad "text"
            if (randomQuote && randomQuote.text) {
                document.getElementById("frase").innerHTML = `${randomQuote.text}`;
            } else {
                document.getElementById("frase").innerHTML = "Texto no disponible";
            }
            
            // Establecer el autor si está disponible
            document.getElementById("author").innerHTML = `${randomQuote.author}`;
        })
        .catch(function(error) {
            console.log("Error al obtener citas:", error);
        });
}
