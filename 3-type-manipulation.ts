type ShapeKind = Shape["kind"];

const shapeById: Record<string, Shape> = {};

declare function getEmployee(nameOrId: string | number): {
  name: string;
  id: number;
  age: number;
};

type Employee = ReturnType<typeof getEmployee>;
type EmployeeIdentifier = Parameters<typeof getEmployee>[0];

const newEmployee: Partial<Employee> = {};

// Omit, Pick, Exclude, etc...

declare function fetchStockPrice(): Promise<number>;

type StockPrice = Awaited<ReturnType<typeof fetchStockPrice>>;
