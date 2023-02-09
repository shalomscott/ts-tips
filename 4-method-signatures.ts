namespace Signatures {
  interface Electric {
    type: "electric";
    thunderShock(): void;
  }

  interface Water {
    type: "water";
    hydroCannon(): void;
  }

  type Pokemon = Electric | Water;

  declare const pikachu: Electric;
  declare const squirtle: Water;

  namespace Attempt1 {
    declare function evolve(pokemon: Pokemon): Pokemon;

    const raichu = evolve(pikachu);
  }

  namespace Attempt2 {
    function evolve(pokemon: Electric): Electric;
    function evolve(pokemon: Water): Water;
    function evolve(pokemon: Pokemon): Pokemon {
      return pokemon;
    }

    const wartortle = evolve(squirtle);
  }

  namespace Attempt1 {
    declare function evolve(pokemon: Pokemon): Pokemon;

    const raichu = evolve(pikachu);
  }

  namespace Best {
    function evolve<T extends Pokemon>(pokemon: T): T {
      return pokemon;
    }

    const wartortle = evolve(squirtle);
  }
}
