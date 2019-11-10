const whereCanIPark = (spots, vehicle) => {
  const sizes = {
    M: 1,
    S: 2,
    R: 3
  };

  const v = vehicle[0].toUpperCase();
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      const currentSpot = spots[i][j];
      if (sizes[currentSpot] && sizes[currentSpot] >= sizes[v]) return [j, i];
    }
  }
  return false;
};
