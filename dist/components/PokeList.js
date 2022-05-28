import { Component } from './Component.js';
import { PokeCard } from './PokeCard.js';
export class PokeList extends Component {
    pokemons;
    template;
    constructor(pokemons, selector) {
        super();
        this.pokemons = pokemons;
        this.template = this.createTemplate();
        this.outRender(selector);
        pokemons.forEach((pokemon) => {
            new PokeCard(pokemon, 'ul.pokemon-list');
        });
        // this.storeService = new HttpStoreClass();
        // this.storeService.getTasks().then((pokemon) => {
        //     this.template = this.createTemplate();
        //     this.outRender(selector);
        // });
    }
    createTemplate() {
        let template = `
            <ul class="pokemon-list">
            
            </ul>
        `;
        return template;
    }
}
