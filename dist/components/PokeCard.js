import { Component } from './Component.js';
export class PokeCard extends Component {
    pokemon;
    template;
    constructor(pokemon, selector) {
        super();
        this.pokemon = pokemon;
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let template = `
           <a href="./details.html?id=${this.pokemon.id}">
                <div clas="pokemon-card">
                    <li class="pokemon-card__card">
                        <div class="pokemon__picture">
                            <img src="${this.pokemon.sprites.front_default}" alt="" />
                        </div>
                        <div class="pokemon__name">
                            <h3>${this.pokemon.name}</h3>
                        </div>
                    </li>
                </div>
            </a> 
        `;
        return template;
    }
}
