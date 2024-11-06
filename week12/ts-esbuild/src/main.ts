import { add, sum, createPoint } from "./add";

console.log('Add: ', add(1, 2)); // 3

console.log('Sum: ', sum(1, 2, 3, 4)); // 10

let x = createPoint(10, 20);

console.log('Point: ', x); // Point: { x: 10, y: 20 }