const finalPosition = moves => {
  return moves.reduce(
    ([x, y], val) => {
      switch (val) {
        case "north":
          return [x, y + 1];
        case "south":
          return [x, y - 1];
        case "west":
          return [x - 1, y];
        case "east":
          return [x + 1, y];
        default:
          return [x, y];
      }
    },
    [0, 0]
  );
};
