interface Shape2 {
  kind: string;
  radius?: number;
  side?: number;
}

function getArea2(shape: Shape2): number {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius! ** 2;
    }
    case "square": {
      return shape.side! * shape.side!;
    }
  }
}
