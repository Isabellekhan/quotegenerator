const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    });
}

            function hello(name){ 
                return "Hello " + (name || "there") + "!"; 
            } 
            function press(){ 
                var in = document.getElementById("input").value; 
                var out = hello(in); 
                document.getElementById("output").innerHTML = out; 
            } 
       