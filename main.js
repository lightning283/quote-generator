const api = "https://api.quotable.io/random";

var quote = document.getElementById("wrd")
var author = document.getElementById("author")

fetch(api)
.then((res) => res.json())
.then((data) => {
    quote.innerHTML = data.content
    author.innerHTML =  "~ " + data.author

});