const pokemonList = document.querySelector('.pokemon-list')
const pokeName = document.getElementById("name")




const loadPokemons = async () => {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`);
        const response = await data.json();
        const pokemons = response.results
        
        pokemons.forEach(async(pokemon) => {
            const responseData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const pokemonData = await responseData.json();

            const button = document.createElement('button')
            button.classList = 'pokemon-card'
            button.addEventListener('click', () => {
                displayModal(pokemonData)
            })

            button.innerHTML = `
                <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
            `

            pokemonList.appendChild(button);
        })
console.log(data);
        
    } catch (e) {
        console.log(e)
    }
}



loadPokemons()