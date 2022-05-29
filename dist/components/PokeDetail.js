import { Component } from './Component.js';
export class PokeDetail extends Component {
    pokemon;
    template;
    constructor(pokemon, selector) {
        super();
        this.pokemon = pokemon;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let template = `
            <div class="pokemon-detail">
                    <div class="detail-picture">
                        <img src="${this.pokemon.sprites.other.dream_world.front_default}" alt="">
                    </div>
                    <div class="detail-info">
                        <p class="detail-info__data info__id">Id: ${this.pokemon.id}</p>
                        <p class="detail-info__data info__type">Type: ${this.pokemon.types[0].type.name}</p>
                        <p class="detail-info__data info__height">Height: ${this.pokemon.height / 10} m</p>
                        <p class="detail-info__data info__weight">Weight: ${this.pokemon.weight / 10} kg</p>
                        <p class="detail-info__data info__move">Move: ${this.pokemon.moves[0].move.name}</p>
                    </div>
            </div>
        `;
        return template;
    }
}
