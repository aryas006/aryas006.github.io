const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "WUM0835KA322+3VqIDWfCg==MT5UZ4BEElbMvfmd";

const options = {
  method: "GET",
  headers: {
    "X-Api-key": apikey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    btnEl.Disabled = true;
    btnEl.innerText = "Updating...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    
    btnEl.Disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false ; 
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
