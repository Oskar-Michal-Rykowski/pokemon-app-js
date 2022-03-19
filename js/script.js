class Pokemons {
  constructor() {
    this.getElements();
    this.showAllPokemons();
  }

  getElements() {
    this.pokemonsSection = document.querySelector('.pokemons');

    this.pokemons = ['Alibaba', 'Babajaga', 'Superman'];
  }

  showAllPokemons() {
    this.pokemons.map((pokemon) => {
      const card = `<div class="card pokemon">
          <img src="https://images.pexels.com/photos/5673835/pexels-photo-5673835.jpeg?cs=srgb&dl=pexels-luke-miller-5673835.jpg&fm=jpg"
              class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${pokemon}</h5>
              <a href="#" class="btn btn-primary">More</a>
          </div>
      </div>`;
      this.pokemonsSection.insertAdjacentHTML('beforeend', card);
    });
  }
}

const app = new Pokemons();
