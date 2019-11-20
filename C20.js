const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 * PI * Math.pow(radius, 3)) / 3;
};

const coneVolume = function(radius, height) {
  return (1 / 3) * height * PI * Math.pow(radius, 2);
};

const prismVolume = function(height, width, depth) {
  return width * height * depth;
};

const totalVolume = function(solids) {
  return solids.reduce((acc, {radius, height, width, depth, type}) => {
    switch(type) {
      case 'sphere': return acc += sphereVolume(radius);
      case 'cone': return acc += coneVolume(radius, height);
      case 'prism': return acc += prismVolume(height, width, depth);
      default: return acc;
    }
  }, 0);
};