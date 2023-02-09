type Pokemon = { type: "water" | "fire"; name: string };

// -------------------[ Example 1 ]-------------------- //

declare function generatePokemon(num: number): Pokemon[];
declare function fight(pokeA: Pokemon, pokeB: Pokemon): Pokemon[];

function battle(): void {
  const playerAsh = generatePokemon(6);
  const playerAmit = generatePokemon(6);

  for (let i = 0; i < 6; ++i) {
    fight(playerAsh[i]!, playerAmit[i]!); // strictNullChecks
  }
}

// -------------------[ Example 2 ]-------------------- //

declare function createPokemon(): Pokemon;

const pokedex: Record<string, Pokemon> = {};

function lookupPokemon(name: string): Pokemon {
  if (!(name in pokedex)) {
    pokedex[name] = createPokemon();
  }
  return pokedex[name]!; // strictNullChecks
}

// https://betterprogramming.pub/cleaner-typescript-with-the-non-null-assertion-operator-300789388376
