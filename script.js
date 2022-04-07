let button = document.querySelector("#searchButton")


async function getData(event) {
    
    event.preventDefault()
    let searchInput = document.getElementById("inputBar").value
    let url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        const pokemonHeading = document.querySelector("#pokemonName")
        pokemonHeading.innerText = `Pokemon: ${res.name.toUpperCase()}` 
        console.log("success!", res
        )
        })
    .catch(error =>{
        console.log("error!", error)})

}     

button.addEventListener('click' , getData)
