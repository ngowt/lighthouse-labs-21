const lightsOn = function(lights) {
  return lights.map(({ id, on }) => ({ id, [on]: true }));
};

const lightsOff = function(lights) {
  return lights.map(({ id, on }) => ({ id, [on]: false }));
};

const toggleLights = function(lights, lightsAreOn) {
  return lightsAreOn ? lightsOff(lights) : lightsOn(lights);
};
