/* eslint-disable no-unused-vars */
import { iPokemon } from '../interface/components.js';
import { HttpStoreClass } from '../services/Http.store.class.js';
import { PokeList } from './PokeList.js';

export class Controller {
    startIndex: number;
    maxIndex: number;
    constructor() {
        const pokeApi = new HttpStoreClass();
        const promises: Array<Promise<iPokemon>> = [];
        this.startIndex = 1;
        this.maxIndex = 151;
        for (let i = this.startIndex; i < this.startIndex + 36; i++) {
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
        for (let i = this.startIndex; i < this.startIndex + 36; i++) {
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
        if (this.startIndex > 36) {
            let previo = <HTMLElement>document.querySelector('#backward');
            previo.style.visibility = 'visible';
        }
        if (forward === 'forward') {
            this.startIndex = this.startIndex + 36;
        } else {
            this.startIndex = this.startIndex - 36;
        }
        this.update();
    }
}
