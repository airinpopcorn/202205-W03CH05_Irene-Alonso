/* eslint-disable no-unused-vars */
import { iPokemon } from '../interface/components.js';
import { Component } from './Component.js';
import { PokeCard } from './PokeCard.js';

export class PokeList extends Component {
    template: string;
    constructor(public pokemons: Array<iPokemon>, selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        pokemons.forEach((pokemon) => {
            new PokeCard(pokemon, 'ul.pokemon-list');
        });
    }
    createTemplate() {
        let template = `
            <ul class="pokemon-list">
            </ul>
            <nav class ="menu">
                <ul class="menu__buttons">
                    <li class="icon"><i class="icon-button icon__backward" id="backward" role="button">◀️</i></li>
                    <li class="icon"><i class="icon-button icon__forward" id="forward" role="button">▶️</i></li>
                </ul>
            </nav>
        `;
        return template;
    }
}
