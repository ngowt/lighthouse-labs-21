const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const cost = 1 + 0.25 * distanceTraveled + (numberOfPeople >= 30 && 0.25);
  return `$${cost.toFixed(2)}`;
};
