const API_KEY = `7cab0c291c8c4c00b52c3959d264b03a`;
const URL = `https://newsapi.org/v2/everything?domains=techcrunch.com&language=en&apiKey=${API_KEY}`;
const Elm = document.querySelector(".elm")
async function getData(){
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    data["articles"].forEach(element => {
        console.log(element);
        Elm.innerHTML += `
    <div>
        <div>
            <h2>
                ${element["title"]}
            </h2>
        </div>
                
        <div>
            <img src = ${element["urlToImage"]}>
                
        </div>

        <div>
            <p>
                ${element["description"]}
            </p>
        </div>
        <div>
            <p>
                Source: ${element["source"]["name"]}
            </p>
        </div>
        <div>
            <a href="${element["url"]}"> Lire Plus</a>
        </div>
    </div>
    `
    });
    
};

// getData()

sources = ["les-echos", "google-news-fr", "le-monde", ]