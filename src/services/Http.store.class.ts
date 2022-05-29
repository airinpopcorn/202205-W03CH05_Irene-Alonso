import { iDetail, iPokemon } from '../interface/components.js';

export class HttpStoreClass {
    url: string;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }

    getPokemon(id: number): Promise<iPokemon> {
        return fetch(this.url + `/${id}`).then((resp) => {
            return resp.json();
        });
    }
    getPokemonDetail(id: string): Promise<iDetail> {
        return fetch(this.url + `/${id}`).then((resp) => {
            return resp.json();
        });
    }
}
