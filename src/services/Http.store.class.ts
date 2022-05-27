import { iPokemon } from '../interface/component.js';

export class HttpStoreClass {
    url: string;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }
    // getTasks(): Promise<Array<iPokemon>> {
    //     return fetch(this.url).then((resp: Response) => {
    //         //then devuelve siempre una promesa
    //         console.log(resp.status);
    //         return resp.json(); //Esto es lo que yo quiero que devuelva la promesa
    //     });
    // }
    getPokemon(id: number): Promise<iPokemon> {
        return fetch(this.url + `/${id}`).then((resp) => {
            return resp.json();
        });
    }
    // setTask(pokemon: iPokemon): Promise<iPokemon> {
    //     return fetch(this.url, {
    //         method: 'post',
    //         body: JSON.stringify(pokemon),
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     }).then((response) => response.json());
    // }
    // updateTask(pokemon: iPokemon): Promise<iPokemon> {
    //     return fetch(this.url + `/${pokemon.results[0].name}`, {
    //         method: 'patch',
    //         body: JSON.stringify(pokemon),
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     }).then((response) => response.json());
    // }
    // deleteTask(pokemon: iPokemon): Promise<number> {
    //     return fetch(this.url + `/${pokemon.results[0].name}`, {
    //         method: 'delete',
    //     }).then((response) => response.status);
    // }
}
