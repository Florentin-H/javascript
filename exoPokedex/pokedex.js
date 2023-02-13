const modal = document.querySelector('#myModal')
const modalCloser = document.querySelector('.close')
const image = document.getElementById("image")
const pokeNumber = document.getElementById("number")
const pokeName = document.getElementById("name")
const pokemonList = document.querySelector('.pokemon-list')
const limit = 20;
let index = 0;
let totalPokemon = 0


const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function(e) {
  const searchValue = e.target.value;
  const pokemonCards = document.querySelectorAll(".pokemon-card");
  pokemonCards.forEach(card => {
    const pokemonName = card.querySelector("h3").textContent;
    if (pokemonName.toLowerCase().includes(searchValue.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});




const displayModal = (pokemon) => {
    const modalContent = modal.querySelector('.modal-content')
    console.log(pokemon)

    modalContent.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2 class="name">#${pokemon.id} ${pokemon.name}</h2>
        <p class="ability">
            ${pokemon.abilities[0]?.ability.name ?? ''}
        </p>
        <p class="ability">
            ${pokemon.abilities[1]?.ability.name ?? ''}
        </p>
        <p class="ability">
            ${pokemon.abilities[2]?.ability.name ?? ''}
        </p>
        <p class="ability">
            ${pokemon.abilities[3]?.ability.name ?? ''}
        </p>
    `

    modal.style.display = "block"
}

const loadPokemons = async () => {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=${limit}`);
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



window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 5) {
        index += limit;
        loadPokemons();
    }
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modalCloser.addEventListener('click', () => {
        modal.style.display = "none";
})




loadPokemons()


