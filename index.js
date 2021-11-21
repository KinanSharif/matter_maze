const { Engine, Render, Runner, World, Bodies } = Matter;
const width = 600;
const height = 600;
const cells = 3;
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls

const walls = [
  Bodies.rectangle(width/2, 0, width, 40, {
  isStatic: true
}),
Bodies.rectangle(width/2, height, width, 40, {
  isStatic: true
}),
Bodies.rectangle(0, height/2, 40, height, {
  isStatic: true
}),
Bodies.rectangle(width, height/2, 40, height, {
  isStatic: true
})
];
World.add(world, walls);

// Maze generation

// why not -> Array(3).fill([false,false,false,]) because those will be pointing to the Same Array as references

const grid = Array(cells).fill(null).map(()=> Array(cells).fill(false));

const verticals = Array(cells).fill(null).map(()=>Array(cells - 1).fill(false));
const horizontals = Array(cells - 1).fill(null).map(()=> Array(cells).fill(false));