export interface iPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

export interface iDetail {
    id: number;
    height: number;
    weight: number;
    types: [
        {
            type: {
                name: string;
            };
        }
    ];
    moves: [
        {
            move: {
                name: string;
            };
        }
    ];
    sprites: {
        other: { dream_world: { front_default: string } };
    };
}
