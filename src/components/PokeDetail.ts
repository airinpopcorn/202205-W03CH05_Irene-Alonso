/* eslint-disable no-unused-vars */
import { iDetail } from '../interface/component.js';
import { Component } from './Component.js';

export class PokeDetail extends Component {
    template: string;
    constructor(public pokemon: iDetail, selector: string) {
        super();
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
