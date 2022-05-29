import { HttpStoreClass } from '../services/Http.store.class.js';
import { PokeDetail } from './PokeDetail.js';
export class ControllerDetail {
    pokeApi;
    constructor() {
        this.pokeApi = new HttpStoreClass();
        const pokePath = new URLSearchParams(window.location.search);
        const pokeId = pokePath.get('id');
        this.pokeApi.getPokemonDetail(pokeId).then((pokemon) => {
            new PokeDetail(pokemon, 'main');
        });
    }
}
