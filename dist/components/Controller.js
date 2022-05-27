import { HttpStoreClass } from '../services/Http.store.class.js';
import { PokeList } from './PokeList.js';
export class Controller {
    startIndex;
    constructor() {
        const pokeApi = new HttpStoreClass();
        const promises = [];
        this.startIndex = 1;
        for (let i = this.startIndex; i <= this.startIndex + 10; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            new PokeList(values, 'slot.pokemon-list');
        });
    }
}
