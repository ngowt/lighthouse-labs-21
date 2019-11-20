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
  const fx = {
    sphere: sphereVolume,
    cone: coneVolume,
    prism: prismVolume
  };

  return solids.reduce((acc, { radius, height, depth, type }) => {
    return (acc += fx[type](radius, height, depth, type));
  }, 0);
};
