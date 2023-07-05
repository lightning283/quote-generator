const api = "https://api.quotable.io/random";
const image_api = "https://api.unsplash.com/photos/random/?client_id=sDD4H2AIXlt8-SR7lsm_tLqETsPnMkJhsOQ4UzMO7jg"

var quote = document.getElementById("wrd")
var author = document.getElementById("author")

fetch(api)
.then((res) => res.json())
.then((data) => {
    quote.innerHTML = data.content
    author.innerHTML =  "~ " + data.author

});

fetch(image_api)
.then((res) => res.json())
.then((data) => {
    document.getElementById("body").style.backgroundImage = data.urls.small
});
