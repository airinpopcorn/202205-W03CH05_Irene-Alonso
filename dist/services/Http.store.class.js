export class HttpStoreClass {
    url;
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
    getPokemon(id) {
        return fetch(this.url + `/${id}`).then((resp) => {
            return resp.json();
        });
    }
}
