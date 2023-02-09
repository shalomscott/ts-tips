interface Shape1 {
  kind: string;
}

interface Circle1 extends Shape1 {
  kind: "circle";
  radius: number;
}

interface Square1 extends Shape1 {
  kind: "square";
  side: number;
}

function getArea1(shape: Shape1): number {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius ** 2;
    }
    case "square": {
      return shape.side * shape.side;
    }
  }
}

// - non-null doesn't help
// - return value error
