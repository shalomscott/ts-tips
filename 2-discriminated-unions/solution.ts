interface Circle {
  kind: "circle"; // discriminant
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius ** 2;
    }
    case "square": {
      return shape.side * shape.side;
    }
  }
}

// Points:
// - TS different type system than traditional, dynamic language
// - nominal vs structural paradigms
// - roughly taken from https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
