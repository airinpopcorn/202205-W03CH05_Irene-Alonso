/* eslint-disable no-unused-vars */
import { iPokemon } from '../interface/component.js';
import { Component } from './Component.js';
import { PokeCard } from './PokeCard.js';

export class PokeList extends Component {
    template: string;
    constructor(public pokemons: Array<iPokemon>, selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        pokemons.forEach((pokemon) => {
            new PokeCard(pokemon, 'slot.item');
        });

        // this.storeService = new HttpStoreClass();
        // this.storeService.getTasks().then((pokemon) => {
        //     this.template = this.createTemplate();
        //     this.outRender(selector);
        // });
    }
    createTemplate() {
        let template = `
            <ul>
                <slot class="item"></slot>
            </ul>
        `;

        return template;
    }
}
