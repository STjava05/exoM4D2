
async function musicData(id) {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + id);
    const jasonData = await response.json();
    console.log(jasonData);
    return jasonData;
}

function search() {
    let searchValue = document.getElementById("searchField").value.toLowerCase();
    musicData(searchValue)
        .then((jasonData) => {
            let artistFlow = document.getElementById(searchValue);
            let artistReset = document.getElementsByClassName("artists")
            console.log(searchValue);
            // artist reset
            for (const artist of artistReset) {
                artist.classList.add("d-none");

            }
            artistFlow.classList.remove("d-none");

            //artist img
            let artistRow = document.getElementById(searchValue + "Section");
            for (let i = 0; i < jasonData.data.length; i++) {
                let card = document.createElement("div");
                let title = document.createElement("p");
                let imgArtist = document.createElement("img");

                imgArtist.classList.add("p-1")
                imgArtist.src = jasonData.data[i].album.cover_medium;

                title.innerText = jasonData.data[i].album.title;

                artistRow.appendChild(card);
                card.appendChild(imgArtist);
                card.appendChild(title);

            }
        })


}

function listData(jasonData, searchValue) {
    console.log(jasonData);
    let dadDiv = document.querySelector("#modal-body");
    let div = document.createElement("div");
    div.classList.add("modal-content");
    div.style.marginBottom = "10px";
    let h2 = document.createElement("h2");
    h2.innerText = searchValue;
    h2.classList.add("modaleArtist");
    div.appendChild(h2);
    for (const data of jasonData) {
        let p = document.createElement("p");
        p.classList.add("modaleAlbum");
        p.innerText = data.title;
        div.appendChild(p);
    }
    dadDiv.appendChild(div);
}
let array = ["eminem", "queen", "metallica"];
for (const artist of array) {
    musicData(artist)
        .then((data) => {
            listData(data.data, artist);
        })
        .catch((err) => {
            console.log(err);
        });
}

/*
1- Viene definita una funzione asincrona musicData(id) che prende un parametro id. 
Questa funzione sarà responsabile di recuperare i dati musicali dall'API di Deezer.

2- All'interno della funzione musicData, viene utilizzato await fetch() per effettuare una richiesta 
al servizio di ricerca di Deezer. L'URL della richiesta è costruito concatenando l'ID di ricerca 
specificato al termine dell'URL di base dell'API di Deezer.

3- Viene utilizzato await response.json() per estrarre i dati JSON dalla risposta.

4- I dati JSON vengono stampati nella console utilizzando console.log(jasonData).

5- Infine, i dati JSON vengono restituiti dalla funzione musicData.


La funzione search() viene definita per gestire l'interazione dell'utente con la pagina di ricerca. 
Al suo interno:

1- Viene selezionato l'elemento HTML con l'ID "searchField" utilizzando document.getElementById("searchField"). 
Questo elemento rappresenta il campo di input di ricerca.

2-Viene recuperato il valore di ricerca dall'elemento di input utilizzando .value.toLowerCase(). 
Il valore viene convertito in lettere minuscole per uniformità.

3- Viene chiamata la funzione musicData(searchValue) passando il valore di ricerca come argomento. 
Questo avvia il processo di recupero dei dati musicali dall'API di Deezer.

4- Utilizzando il metodo .then() sulla promessa restituita da musicData(), 
si ottiene il risultato dei dati musicali ottenuti (jasonData).

5- Viene selezionato l'elemento HTML corrispondente all'artista cercato utilizzando document.getElementById(searchValue). 
Questo elemento rappresenta il contenitore dell'artista specifico.

6- Vengono selezionati tutti gli elementi HTML con la classe "artists" utilizzando document.getElementsByClassName("artists"). 
Questi elementi rappresentano gli artisti visualizzati nella pagina.

7- Viene eseguito un ciclo for su tutti gli elementi HTML con la classe "artists" 
e viene aggiunta loro la classe "d-none" per nasconderli.

8- Viene rimossa la classe "d-none" dall'elemento HTML corrispondente all'artista cercato utilizzando artistFlow.classList.remove("d-none"). 
In questo modo l'artista viene visualizzato nella pagina.

9- Viene selezionato l'elemento HTML corrispondente alla sezione degli artisti utilizzando document.getElementById(searchValue + "Section").

10- Per ogni elemento nei dati JSON (jasonData.data), viene creato un elemento <div> utilizzando document.createElement("div").

11- Vengono creati un elemento <p> per il titolo e un elemento <img> per l'immagine dell'artista.

12-Al <img> viene assegnato l'URL dell'immagine dell'album utilizzando `img





*/