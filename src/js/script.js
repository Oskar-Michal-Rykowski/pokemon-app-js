class Pokemons {
  constructor() {
    this.fetchPokemons();
    this.getElements();
  }

  getElements() {
    this.pokemonsSection = document.querySelector('.pokemons');

    // this.pokemons = ['Alibaba', 'Babajaga', 'Superman'];
  }

  fetchPokemons() {
    fetch('https://api.pokemontcg.io/v2/cards?pageSize=5')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log('resp', resp);
        this.pokemons = resp.data;
        this.showAllPokemons();
      });
  }

  showAllPokemons() {
    this.pokemons.map((pokemon) => {
      const card = `<div class="card pokemon">
          <img src="${pokemon.images.large}"
              class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${pokemon.name}</h5>
              <a href="#" class="btn btn-primary">More</a>
          </div>
      </div>`;
      this.pokemonsSection.insertAdjacentHTML('beforeend', card);
    });
  }
}

// class PokemonProfile {}

// eslint-disable-next-line no-unused-vars
const pokemons = new Pokemons();
