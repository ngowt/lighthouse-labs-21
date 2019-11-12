const checkAir = (samples, threshold) => {
  return samples.filter(s => s === "dirty").length / samples.length >= threshold
    ? "Polluted"
    : "Clean";
};
