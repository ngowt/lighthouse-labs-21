const pumpkinSpice = money => {
  const foods = {
    pie: {
      cost: 5,
      spice: 30
    },
    lattes: {
      cost: 3,
      spice: 15
    },
    macarons: {
      cost: 1,
      spice: 3
    }
  };

  let totalSpice = 0;
  return Object.keys(foods)
    .reduce((acc, cv) => {
      const moneyBefore = money;
      totalSpice += Math.floor(money / foods[cv].cost) * foods[cv].spice;
      money -= Math.floor(money / foods[cv].cost) * foods[cv].cost;
      return [...acc, Math.floor(moneyBefore / foods[cv].cost)];
    }, [])
    .concat(totalSpice);
};
