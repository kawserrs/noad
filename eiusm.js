// Assuming 'out' is your object and 'node' is the item you want to push
let out = {
  source: []
};

let node = {
  id: 1,
  name: "exampleNode"
};

// Pushing the node into the source array
out.source.push(node);

// Verifying the result
console.log(out.source);
