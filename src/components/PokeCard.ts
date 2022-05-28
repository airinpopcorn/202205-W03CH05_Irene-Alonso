/* eslint-disable no-unused-vars */
import { iPokemon } from '../interface/component.js';
import { Component } from './Component.js';

export class PokeCard extends Component {
    template: string;
    constructor(public pokemon: iPokemon, selector: string) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
        // this.storeService = new HttpStoreClass();
        // this.storeService.getTasks().then((pokemon) => {
        //     this.template = this.createTemplate();
        //     this.outRender(selector);
        // });
    }
    createTemplate() {
        let template = `
            <div clas="pokemon-card>
                <li class="pokemon-list__card">
                    <div class="pokemon-card__picture">
                        <img src="${this.pokemon.sprites.front_default}" alt="" />
                    </div>
                    <div class="pokemon-card__name">
                        <h3>${this.pokemon.name}</h3>
                    </div>
                </li>
            </div>
        `;

        return template;
    }
}
