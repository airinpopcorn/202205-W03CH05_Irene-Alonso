/* eslint-disable no-unused-vars */
import { iDetail, iPokemon } from '../interface/component.js';
import { HttpStoreClass } from '../services/Http.store.class.js';
import { PokeDetail } from './PokeDetail.js';
import { PokeList } from './PokeList.js';

export class Controller {
    startIndex: number;
    maxIndex: number;
    constructor() {
        const pokeApi = new HttpStoreClass();
        const promises: Array<Promise<iPokemon>> = [];
        this.startIndex = 1;
        this.maxIndex = 151;
        for (let i = this.startIndex; i < this.startIndex + 30; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            new PokeList(values, 'main');
            this.manageIcon();
        });
    }
    update() {
        const pokeApi = new HttpStoreClass();
        const promises: Array<Promise<iPokemon>> = [];
        for (let i = this.startIndex; i < this.startIndex + 30; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            new PokeList(values, 'main');
            this.manageIcon();
        });
    }
    manageIcon() {
        document.querySelectorAll('.icon-button').forEach((item) => {
            item.addEventListener('click', this.handlerIcon.bind(this));
        });
    }
    handlerIcon(ev: Event) {
        const backward = (<HTMLElement>ev.target).id;
        const forward = (<HTMLElement>ev.target).id;
        if (this.startIndex > 30) {
            let previo = <HTMLElement>document.querySelector('#backward');
            previo.style.visibility = 'visible';
        }
        if (forward === 'forward') {
            this.startIndex = this.startIndex + 30;
        } else {
            this.startIndex = this.startIndex - 30;
        }
        this.update();
    }
    /* managePokemon() {
        document.querySelectorAll('.pokeButton').forEach((item) => {
            item.addEventListener('click', this.handlerPokemon.bind(this));
        });
    }
    handlerPokemon(ev: Event) {
        const promises: Array<Promise<iDetail>> = [];
        Promise.all(promises).then((values) => {
            new PokeDetail(values, '.pokemon-card');
            this.manageIcon();
            this.managePokemon();
        });
        this.update();
    } */
}
