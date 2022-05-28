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
            <div clas="pokemon-card>
                <li class="pokemon-list__card">
                    <div class="pokemon-card__picture">
                        <p>${this.pokemon.sprites.other.dream_world.front_default}</p>
                    </div>
                    <div class="pokemon-card__name">
                        <h3>${this.pokemon.types}</h3>
                    </div>
                </li>
            </div>
        `;
        return template;
    }
}
