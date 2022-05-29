import { HttpStoreClass } from '../services/Http.store.class.js';
import { PokeDetail } from './PokeDetail.js';

export class ControllerDetail {
    pokeApi: HttpStoreClass;
    constructor() {
        this.pokeApi = new HttpStoreClass();
        const pokePath = new URLSearchParams(window.location.search);
        const pokeId = <string>pokePath.get('id');
        this.pokeApi.getPokemonDetail(pokeId).then((pokemon) => {
            new PokeDetail(pokemon, 'main');
        });
    }
}
