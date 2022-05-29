import { HttpStoreClass } from '../services/Http.store.class.js';
import { PokeList } from './PokeList.js';
export class Controller {
    startIndex;
    maxIndex;
    constructor() {
        const pokeApi = new HttpStoreClass();
        const promises = [];
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
        const promises = [];
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
    handlerIcon(ev) {
        const backward = ev.target.id;
        const forward = ev.target.id;
        if (this.startIndex > 36) {
            let previo = document.querySelector('#backward');
            previo.style.visibility = 'visible';
        }
        if (forward === 'forward') {
            this.startIndex = this.startIndex + 36;
        }
        else {
            this.startIndex = this.startIndex - 36;
        }
        this.update();
    }
}
